import { join } from 'node:path';
import { kebabCase } from 'change-case';

import { createContentfulImportDeclaration } from './contentful-imports.js';
import { formatName } from './format-name.js';
import { generateSkeletonType, generateFieldsType, generateBaseType } from './generate-types.js';

const contentfulImportDeclaration = createContentfulImportDeclaration();

/**
 * @param {import('./index.js').ContentfulGenerator} generator
 * @param {import('contentful-management').ContentType} contentType
 */
export class ContentType {
  /** @type Set<ContentType> */
  imports = new Set();

  /**
   *
   * @param {import('../client/index.js').ContentfulGenerator} generator
   * @param {import('contentful-management').ContentType} contentType
   */
  constructor(generator, contentType) {
    this.generator = generator;
    this.contentType = contentType;
  }

  get id() {
    return this.contentType.sys.id;
  }

  get name() {
    return formatName(this.contentType.name);
  }

  get directory() {
    return this.generator.destination;
  }

  get project() {
    return this.generator.project;
  }

  get filename() {
    return kebabCase(this.contentType.name);
  }

  /**
   * @param {'.ts' | '.js'} extension The file extension.
   * @returns {string}
   */
  path(extension = '.ts') {
    return join(this.directory, this.filename) + extension;
  }

  get fields() {
    return generateFieldsType(this);
  }

  get skeleton() {
    return generateSkeletonType(this);
  }

  get type() {
    return generateBaseType(this);
  }

  generate() {
    const sourceFile = this.project.createSourceFile(this.path('.ts'), '', {
      overwrite: true,
    });

    sourceFile.addImportDeclaration(contentfulImportDeclaration);

    sourceFile.addInterface(this.fields);
    sourceFile.addTypeAlias(this.skeleton);
    sourceFile.addTypeAlias(this.type);

    for (const contentType of this.imports) {
      const isTypeOnly = true;
      sourceFile.addImportDeclaration({
        moduleSpecifier: `./${contentType.filename}`,
        namedImports: [{ name: contentType.skeleton.name, isTypeOnly }],
      });
    }
  }
}

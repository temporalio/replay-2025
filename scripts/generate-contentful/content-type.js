import { join } from 'node:path';
import { kebabCase, pascalCase } from 'change-case';
import { toType } from './to-type.js';

/**
 * @param {import('./content-type').ContentfulGenerator} generator
 * @param {import('contentful-management').ContentType} contentType
 */
export class ContentType {
  /** @type Set<ContentType> */
  imports = new Set();

  contentfulImports = [
    'ChainModifiers',
    'Entry',
    'EntryFieldTypes',
    'EntrySkeletonType',
    'LocaleCode',
  ];

  /**
   *
   * @param {import('./client').ContentfulGenerator} generator
   * @param {import('contentful-management').ContentType} contentType
   */
  constructor(generator, contentType) {
    this.generator = generator;
    this.contentType = contentType;

    this.sourceFile = generator.project.createSourceFile(this.fullFilePath, '', {
      overwrite: true,
    });
  }

  get id() {
    return this.contentType.sys.id;
  }

  get name() {
    const name = this.contentType.name;
    if (name === name.toUpperCase()) return name;
    return pascalCase(name);
  }

  get fileName() {
    return kebabCase(this.contentType.name);
  }

  get fullFilePath() {
    return join(this.generator.destination, `${this.fileName}.ts`);
  }

  get fieldsType() {
    return `${this.name}Fields`;
  }

  /** @type import('ts-morph').InterfaceDeclarationStructure */
  get fields() {
    return {
      name: `${this.name}Fields`,
      properties: this.contentType.fields.map((field) => {
        const type = toType(field, this);

        return {
          name: field.id,
          type,
          hasQuestionToken: !field.required,
        };
      }),
      isExported: true,
    };
  }

  /** @type import('ts-morph').TypeAliasDeclarationStructure */
  get skeleton() {
    return {
      name: `${this.name}Skeleton`,
      type: `EntrySkeletonType<${this.name}Fields, '${this.id}'>`,
      isExported: true,
    };
  }

  /** @type import('ts-morph').TypeAliasDeclarationStructure */
  get type() {
    return {
      name: this.name,
      type: `Entry<${this.skeleton.name}, Modifiers, Locales>`,
      typeParameters: [
        { name: 'Modifiers', constraint: 'ChainModifiers' },
        { name: 'Locales', constraint: 'LocaleCode', default: 'LocaleCode' },
      ],
      isExported: true,
    };
  }

  generate() {
    this.sourceFile.addInterface(this.fields);
    this.sourceFile.addTypeAlias(this.skeleton);
    this.sourceFile.addTypeAlias(this.type);

    this.sourceFile.addImportDeclaration({
      moduleSpecifier: 'contentful',
      namedImports: this.contentfulImports.map((name) => ({ name, isTypeOnly: true })),
    });

    for (const contentType of this.imports) {
      this.sourceFile.addImportDeclaration({
        moduleSpecifier: `./${contentType.fileName}.js`,
        namedImports: [{ name: contentType.skeleton.name, isTypeOnly: true }],
      });
    }
  }
}

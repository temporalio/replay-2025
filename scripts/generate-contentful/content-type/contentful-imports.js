/** @type Readonly<string[]> */
const contentfulImports = [
  'ChainModifiers',
  'Entry',
  'EntryFieldTypes',
  'EntrySkeletonType',
  'LocaleCode',
];

/**
 * Creates an import declaration for the Contentful module.
 * @param {string[]} imports
 * @returns {import('ts-morph').ImportDeclarationStructure}
 */
export const createContentfulImportDeclaration = (imports = contentfulImports) => {
  const isTypeOnly = true;
  return {
    moduleSpecifier: 'contentful',
    namedImports: imports.map((name) => ({ name, isTypeOnly })),
  };
};

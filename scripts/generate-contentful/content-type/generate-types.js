import { toType } from './to-type.js';

/**
 * @typedef {import('contentful-management').ContentType} ContentType
 */

/**
 * Generate a skeleton type for a Contentful content type.
 * @param {object} parameters
 * @param {string} parameters.name
 * @param {string} parameters.id
 * @returns {import('ts-morph').TypeAliasDeclarationStructure}
 */
export const generateSkeletonType = ({ name, id }) => {
  return {
    name: `${name}Skeleton`,
    type: `EntrySkeletonType<${name}Fields, '${id}'>`,
    isExported: true,
  };
};

/**
 * Generate a fields type for a Contentful content type.
 * @param {import('./index').ContentType} parameters
 */
export const generateFieldsType = (parameters) => {
  const { contentType, name } = parameters;

  const properties = contentType.fields.map((field) => {
    const type = toType(field, parameters);

    return {
      name: field.id,
      type,
      hasQuestionToken: !field.required,
    };
  });

  return {
    name: `${name}Fields`,
    properties,
    isExported: true,
  };
};

/**
 *
 * @param {ContentType} parameters
 * @returns {import('ts-morph').TypeAliasDeclarationStructure}
 */
export const generateBaseType = ({ name, skeleton }) => {
  return {
    name: name,
    type: `Entry<${skeleton.name}, Modifiers, Locales>`,
    typeParameters: [
      { name: 'Modifiers', constraint: 'ChainModifiers' },
      { name: 'Locales', constraint: 'LocaleCode', default: 'LocaleCode' },
    ],
    isExported: true,
  };
};

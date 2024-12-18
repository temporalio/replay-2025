/**
 * Converts a Contentful field to a TypeScript type.
 * @param {import('contentful').ContentTypeField} field
 * @param {ContentType} contentType
 * @returns {string}
 */
export const toType = (field, contentType) => {
  let result = `EntryFieldTypes.${field.type}`;
  const values = getValidations(field);

  if (field.type === 'Array') {
    return `EntryFieldTypes.Array<${toType(field.items, contentType)}>`;
  }

  if (field.type === 'Link') {
    if (field.linkType === 'Asset') {
      return 'EntryFieldTypes.AssetLink';
    }

    if (field.linkType === 'Entry') {
      const links = [];

      for (const type of field.validations) {
        if (type.linkContentType) {
          const linkedType = contentType.generator.getContentType(type.linkContentType[0]);

          if (linkedType) {
            contentType.imports.add(linkedType);
            links.push(linkedType.skeleton.name);
          }
        }
      }

      return `EntryFieldTypes.EntryLink<${links.join(' | ')}>`;
    }
  }

  if (values.length) {
    result += `<${values.map((value) => `'${value}'`).join(' | ')}>`;
  }

  return result;
};

/**
 * @param {import('contentful').ContentTypeField} field
 * @returns {string[]}
 */
const getValidations = (field) => {
  if (!field.validations) return [];
  for (const validation of field.validations) {
    if (validation.in) {
      return validation.in;
    }
  }
  return [];
};

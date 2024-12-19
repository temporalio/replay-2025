/**
 * Converts a Contentful field to a TypeScript type.
 * @param {import('contentful').ContentTypeField} field
 * @param {import('./index').ContentType} contentType
 * @returns {string}
 */
export const toType = (field, contentType) => {
  let result = `EntryFieldTypes.${field.type}`;
  const values = getEmumValues(field);

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
          const types = type.linkContentType.map((id) => contentType.generator.getContentType(id));

          for (const linkedType of types) {
            if (!linkedType) continue;
            contentType.imports.add(linkedType);
            links.push(linkedType.skeleton.name);
          }
        }
      }

      return `EntryFieldTypes.EntryLink<${union(links)}>`;
    }
  }

  if (values.length) {
    result += `<${union(values.map((value) => `'${value}'`))}>`;
  }

  return result;
};

/**
 * Creates a union type from an array of types.
 * @param {string[]} types
 */
const union = (types) => types.join(' | ');

/**
 * Get the validation values for a field.
 * @param {import('contentful').ContentTypeField} field
 * @returns {string[]}
 */
const getEmumValues = (field) => {
  if (!field.validations) return [];
  for (const validation of field.validations) {
    if (validation.in) {
      return validation.in;
    }
  }
  return [];
};

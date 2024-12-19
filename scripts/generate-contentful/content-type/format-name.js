import { pascalCase } from 'change-case';

export const formatName = (name) => {
  if (name === name.toUpperCase()) {
    return name;
  }
  return pascalCase(name);
};

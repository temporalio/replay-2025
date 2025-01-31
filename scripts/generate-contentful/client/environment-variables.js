/** @type {Readonly<{ accessToken: string, environmentId: string, space: string }>} */
export const environmentVariables = {
  accessToken: 'CONTENTFUL_ACCESS_TOKEN',
  space: 'CONTENTFUL_SPACE_ID',
};

export const enviromentVariablesImportDeclaration = {
  moduleSpecifier: '$env/static/private',
  namedImports: Object.values(environmentVariables).map((name) => ({ name })),
  trailingTrivia: '\n\n',
};

export const environmentVariablesList = Object.values(environmentVariables);

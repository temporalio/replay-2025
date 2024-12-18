#!/usr/bin/env node

import 'dotenv/config';

import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { $ } from 'zx';
import chalk from 'chalk';
import prettier from 'prettier';
import fg from 'fast-glob';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const destination = join('src', 'lib', 'contentful', 'generated-types');

if (!spaceId || !token || !environment) {
  console.error(chalk.red('Missing environment variables'), { spaceId, token, environment });
  process.exit(1);
}

console.log(chalk.blue('Generating Contentful types...'));

try {
  await $`cf-content-types-generator -s ${spaceId} -t ${token} -e ${environment} -X -o ${destination}`;
} catch (error) {
  console.error(chalk.red('Error generating Contentful types'), error);
  process.exit(1);
}

console.log(chalk.green('Contentful types generated successfully!'));
console.log(chalk.blue('Formatting generated types...'));

const prettierOptions = await prettier.resolveConfig(destination);

for (const file of fg.globSync('src/lib/contentful/generated-types/**/*.ts')) {
  console.log(chalk.cyan('Formatting:'), chalk.yellow(file));
  const content = await readFile(file, 'utf-8');
  const formatted = await prettier.format(content, { parser: 'typescript', ...prettierOptions });
  await writeFile(file, formatted);
}

import { readFile, writeFile } from 'node:fs/promises';
import prettier from 'prettier';
import { info } from './log.js';

const prettierOptions = await prettier.resolveConfig(process.cwd());

/**
 * Formats a file using Prettier.
 * @param {string} file
 * @returns {Promise<void>}
 */
export const formatFile = async (file) => {
  info('Formatting:', file);
  const content = await readFile(file, 'utf-8');
  const formatted = await prettier.format(content, { ...prettierOptions, parser: 'typescript' });
  await writeFile(file, formatted);
};

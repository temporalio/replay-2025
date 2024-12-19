import chalk from 'chalk';

/**
 * Logs a message to the console with the specified color.
 * @param {import('chalk').ColorName} color
 * @param  {...string} messages
 */
export const log = (color, ...messages) => console.log(chalk[color](...messages));

/**
 * Displays an informational message.
 * @param {string} message
 * @param  {...string} messages
 * @returns void;
 */
export const info = (message, ...messages) => {
  console.info(chalk.blue(message), ...messages);
};

export const success = (...messages) => console.log('✅', chalk.green(...messages));
export const warn = (...messages) => console.warn('⚠️', chalk.yellow(...messages));
export const error = (...messages) => console.error('🚨', chalk.red(...messages));

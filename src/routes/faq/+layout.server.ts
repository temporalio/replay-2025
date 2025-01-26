import { getFAQEntries } from './../../lib/contentful/index';
// import { compileMarkdown } from '$lib/utilities/compile-markdown';

import type { LayoutServerLoad } from './$types.js';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const faqEntries = await getFAQEntries();
  // const markdown = await compileMarkdown(ADD THE ANSWERS HERE?? ?? '', true);

  // TO DO: We need to use the compileMarkdown function to format each of the answers for the questions in each category.

  return { FAQ: faqEntries.items };
};

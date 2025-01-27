import { getFAQEntries } from './../../lib/contentful/index';
// import { compileMarkdown } from '$lib/utilities/compile-markdown';
import { error } from '@sveltejs/kit';
import { getFaqEntriesByCategory } from './../../lib/contentful/index';
import type { LayoutServerLoad } from './$types.js';

export const prerender = true;
export const load: LayoutServerLoad = async () => {
  const faqEntries = await getFAQEntries();
  if (!faqEntries) {
    throw error(404, 'FAQ not found');
  }
  console.log(getFaqEntriesByCategory());
  // console.log('faqEntries:  ', faqEntries.items);
  // TO DO: We need to use the compileMarkdown function to format each of the answers for the questions in each category. KT

  // const markdown = await compileMarkdown(faqEntries ?? '', true);

  return { FAQ: faqEntries.items };
};

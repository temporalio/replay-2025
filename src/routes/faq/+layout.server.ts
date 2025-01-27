import { getFAQEntries } from './../../lib/contentful/index';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types.js';


export const prerender = true;
export const load: LayoutServerLoad = async () => {
  const content = await getFAQEntries();

  const faqEntries = await Promise.all((content.items ?? []).map(async (entry) => {
    
    
    ...content, 
    fields: {
      ...content.fields,
      answer: await compileMarkdown(content.fields.answer ?? '', true),
    },

    return entry}));




  // TO DO: We need to use the compileMarkdown function to format each of the answers for the questions in each category. KT

  // const markdown = await compileMarkdown(faqEntries ?? '', true);

  return { FAQ: faqEntries.items };
};

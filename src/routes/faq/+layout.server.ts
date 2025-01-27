import { getFAQEntries } from './../../lib/contentful/index';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types.js';

export const prerender = true;
export const load: LayoutServerLoad = async () => {
  const content = await getFAQEntries();

  const faqEntries = await Promise.all(
    (content.items ?? []).map(async (entry) => ({
      ...entry,
      fields: {
        ...entry.fields,
        answer: await compileMarkdown(entry.fields.answer ?? '', true),
      },
    })),
  );

  // TO DO: We need to use the compileMarkdown function to format each of the answers for the questions in each category. KT

  return { FAQ: faqEntries };
};

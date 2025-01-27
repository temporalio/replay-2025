import { getFAQEntries } from './../../lib/contentful/index';
import { compileQuestions } from '$lib/contentful/client';
import type { LayoutServerLoad } from './$types.js';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const content = await getFAQEntries();


  const faqEntries = await Promise.all(
    content.items.map(async (entry) => ({
      ...entry,
      fields: {
        ...entry.fields,
        generalQuestions: await compileQuestions(entry.fields.generalQuestions ?? []),
        ticketingQuestions: await compileQuestions(entry.fields.ticketingQuestions ?? []),
        miscQuestions: await compileQuestions(entry.fields.miscQuestions ?? []),
      },
    })),
  );

  return { FAQ: faqEntries };
};

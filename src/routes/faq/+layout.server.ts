import { getFAQEntries } from './../../lib/contentful/index';

import type { LayoutServerLoad } from './$types.js';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const faqEntries = await getFAQEntries();

  return { FAQ: faqEntries.items };
};

import { getSpeakerEntries, getSponsorEntries, getFAQEntries } from '../lib/contentful/index.js';

import type { LayoutServerLoad } from './$types.js';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const speakers = await getSpeakerEntries();
  const sponsors = await getSponsorEntries();
  const faq = await getFAQEntries();

  return { speakers: speakers.items, sponsors: sponsors.items, faq: faq.items };
};

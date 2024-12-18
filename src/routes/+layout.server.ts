import { getSpeakerEntries, getSponsorEntries } from '../lib/contentful/index.js';

import type { LayoutServerLoad } from './$types.js';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const speakers = await getSpeakerEntries();
  const sponsors = await getSponsorEntries();

  return { speakers: speakers.items, sponsors: sponsors.items };
};

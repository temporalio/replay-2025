import { getSpeakers, getSponsors } from '../lib/contentful/index.js';

import type { LayoutServerLoad } from './$types.js';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const speakers = await getSpeakers();
  const sponsors = await getSponsors();

  return { speakers: speakers.items, sponsors: sponsors.items };
};

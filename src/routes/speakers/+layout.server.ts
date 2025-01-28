import { getSpeakerEntries } from './../../lib/contentful/index';

import type { LayoutServerLoad } from './$types.js';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const speakers = await getSpeakerEntries();

  return { speakers: speakers.items };
};

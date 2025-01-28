import { getSpeakerSlugs } from '$lib/contentful/client';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = async () => {
  const slugs = await getSpeakerSlugs();

  return slugs;
};

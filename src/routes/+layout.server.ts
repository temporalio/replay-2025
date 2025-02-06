import { getSpeakerEntries, getSponsorEntries } from '../lib/contentful/index.js';

import type { LayoutServerLoad } from './$types.js';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const speakers = await getSpeakerEntries();
  const sponsors = await getSponsorEntries();

  const impact = sponsors.items.filter((sponsor) => sponsor.fields.sponsorType === 'Impact');
  const premier = sponsors.items.filter((sponsor) => sponsor.fields.sponsorType === 'Premier');
  const elite = sponsors.items.filter((sponsor) => sponsor.fields.sponsorType === 'Elite');

  return {
    speakers: speakers.items,
    sponsors: sponsors.items,
    impact: impact,
    premier: premier,
    elite: elite,
  };
};

/** Do not modify. This file was automatically generated. */
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '$env/static/private';

import { createClient, type EntriesQueries, type EntrySkeletonType } from 'contentful';

import { type SpeakerSkeleton as Speaker } from './speaker';
import { type SponsorSkeleton as Sponsor } from './sponsor';

export * from './home';
export * from './global-settings';
export * from './cta';
export * from './speaker';
export * from './sponsor';

type ContentfulEntries<C extends EntrySkeletonType> = Omit<
  EntriesQueries<C, undefined>,
  'content_type'
>;
export type ContentType = 'home' | 'globalSettings' | 'cta' | 'speaker' | 'sponsor';

const client = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE_ID,
});

/** Get all of the `Speaker` entries from Contentful. */
export const getSpeakers = (query: ContentfulEntries<Speaker> = {}) => {
  return client.withoutUnresolvableLinks.getEntries<Speaker>({ ...query, content_type: 'speaker' });
};

/** Get all of the `Sponsor` entries from Contentful. */
export const getSponsors = (query: ContentfulEntries<Sponsor> = {}) => {
  return client.withoutUnresolvableLinks.getEntries<Sponsor>({ ...query, content_type: 'sponsor' });
};

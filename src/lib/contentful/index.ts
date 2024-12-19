/** Do not modify. This file was automatically generated. */
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '$env/static/private';
import { createClient, type EntriesQueries, type EntrySkeletonType } from 'contentful';
import { type HomeSkeleton as Home } from './home';
import { type GlobalSettingsSkeleton as GlobalSettings } from './global-settings';
import { type CTASkeleton as CTA } from './cta';
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
/** Get all of the `Home` entries from Contentful. */
export const getHomeEntries = (query: ContentfulEntries<Home> = {}) => {
  return client.getEntries<Home>({ ...query, content_type: 'home' });
};
/** Get all of the `GlobalSettings` entries from Contentful. */
export const getGlobalSettingsEntries = (query: ContentfulEntries<GlobalSettings> = {}) => {
  return client.getEntries<GlobalSettings>({ ...query, content_type: 'globalSettings' });
};
/** Get all of the `CTA` entries from Contentful. */
export const getCTAEntries = (query: ContentfulEntries<CTA> = {}) => {
  return client.getEntries<CTA>({ ...query, content_type: 'cta' });
};
/** Get all of the `Speaker` entries from Contentful. */
export const getSpeakerEntries = (query: ContentfulEntries<Speaker> = {}) => {
  return client.getEntries<Speaker>({ ...query, content_type: 'speaker' });
};
/** Get all of the `Sponsor` entries from Contentful. */
export const getSponsorEntries = (query: ContentfulEntries<Sponsor> = {}) => {
  return client.getEntries<Sponsor>({ ...query, content_type: 'sponsor' });
};

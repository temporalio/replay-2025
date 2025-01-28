/** Do not modify. This file was automatically generated. */
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '$env/static/private';
import { createClient, type EntriesQueries, type EntrySkeletonType } from 'contentful';
import { type FAQSkeleton as FAQ } from './faq';
import { type SessionSkeleton as Session } from './session';
import { type SpeakerSkeleton as Speaker } from './speaker';
import { type QuestionsSkeleton as Questions } from './questions';
import { type HomeSkeleton as Home } from './home';
import { type SponsorSkeleton as Sponsor } from './sponsor';
import { type TimeSlotSkeleton as TimeSlot } from './time-slot';
import { type GlobalSettingsSkeleton as GlobalSettings } from './global-settings';
import { type CTASkeleton as CTA } from './cta';

export * from './faq';
export * from './session';
export * from './speaker';
export * from './questions';
export * from './home';
export * from './sponsor';
export * from './time-slot';
export * from './global-settings';
export * from './cta';

type ContentfulEntries<C extends EntrySkeletonType> = Omit<
  EntriesQueries<C, undefined>,
  'content_type'
>;
export type ContentType =
  | 'faq'
  | 'talk'
  | 'speaker'
  | 'questions'
  | 'home'
  | 'sponsor'
  | 'timeSlot'
  | 'globalSettings'
  | 'cta';

const client = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE_ID,
});
/** Get all of the `FAQ` entries from Contentful. */
export const getFAQEntries = (query: ContentfulEntries<FAQ> = {}) => {
  return client.getEntries<FAQ>({ ...query, content_type: 'faq' });
};
/** Get all of the `Session` entries from Contentful. */
export const getSessionEntries = (query: ContentfulEntries<Session> = {}) => {
  return client.getEntries<Session>({ ...query, content_type: 'talk' });
};
/** Get all of the `Speaker` entries from Contentful. */
export const getSpeakerEntries = (query: ContentfulEntries<Speaker> = {}) => {
  return client.getEntries<Speaker>({ ...query, content_type: 'speaker' });
};
/** Get all of the `Questions` entries from Contentful. */
export const getQuestionsEntries = (query: ContentfulEntries<Questions> = {}) => {
  return client.getEntries<Questions>({ ...query, content_type: 'questions' });
};
/** Get all of the `Home` entries from Contentful. */
export const getHomeEntries = (query: ContentfulEntries<Home> = {}) => {
  return client.getEntries<Home>({ ...query, content_type: 'home' });
};
/** Get all of the `Sponsor` entries from Contentful. */
export const getSponsorEntries = (query: ContentfulEntries<Sponsor> = {}) => {
  return client.getEntries<Sponsor>({ ...query, content_type: 'sponsor' });
};
/** Get all of the `TimeSlot` entries from Contentful. */
export const getTimeSlotEntries = (query: ContentfulEntries<TimeSlot> = {}) => {
  return client.getEntries<TimeSlot>({ ...query, content_type: 'timeSlot' });
};
/** Get all of the `GlobalSettings` entries from Contentful. */
export const getGlobalSettingsEntries = (query: ContentfulEntries<GlobalSettings> = {}) => {
  return client.getEntries<GlobalSettings>({ ...query, content_type: 'globalSettings' });
};
/** Get all of the `CTA` entries from Contentful. */
export const getCTAEntries = (query: ContentfulEntries<CTA> = {}) => {
  return client.getEntries<CTA>({ ...query, content_type: 'cta' });
};

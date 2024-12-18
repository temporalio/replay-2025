import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from "$env/static/private";
import { createClient, type EntriesQueries, type EntryCollection } from "contentful";
import { type HomeSkeleton as Home } from "./home";
import { type GlobalSettingsSkeleton as GlobalSettings } from "./global-settings";
import { type CTASkeleton as CTA } from "./cta";
import { type SpeakerSkeleton as Speaker } from "./speaker";
import { type SponsorSkeleton as Sponsor } from "./sponsor";

export * from "./home";
export * from "./global-settings";
export * from "./cta";
export * from "./speaker";
export * from "./sponsor";

export type ContentType = 'home' | 'globalSettings' | 'cta' | 'speaker' | 'sponsor';

const accessToken = CONTENTFUL_ACCESS_TOKEN;

if (!accessToken) { throw new Error('Missing environment variable: CONTENTFUL_ACCESS_TOKEN'); }

const space = CONTENTFUL_SPACE_ID;

if (!space) { throw new Error('Missing environment variable: CONTENTFUL_SPACE_ID'); }

export const client = createClient({ accessToken, space });
export const getHomeEntries = (query: Omit<EntriesQueries<Home, undefined>, 'content_type'> = {}) => client.getEntries<Home>({ ...query, content_type: 'home'});
export const getGlobalSettingsEntries = (query: Omit<EntriesQueries<GlobalSettings, undefined>, 'content_type'> = {}) => client.getEntries<GlobalSettings>({ ...query, content_type: 'globalSettings'});
export const getCTAEntries = (query: Omit<EntriesQueries<CTA, undefined>, 'content_type'> = {}) => client.getEntries<CTA>({ ...query, content_type: 'cta'});
export const getSpeakerEntries = (query: Omit<EntriesQueries<Speaker, undefined>, 'content_type'> = {}) => client.getEntries<Speaker>({ ...query, content_type: 'speaker'});
export const getSponsorEntries = (query: Omit<EntriesQueries<Sponsor, undefined>, 'content_type'> = {}) => client.getEntries<Sponsor>({ ...query, content_type: 'sponsor'});

import type { Entry } from 'contentful';
import type { Speaker } from '../models/speaker';
import type { Sponsor } from '../models/sponsor';

import type * as Contentful from '../generated-types';

export type EntryType = Entry<
  Contentful.TypeSpeakerSkeleton | Contentful.TypeSponsorSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  never
>;

export type ContentType<T extends Entry> = T extends Entry
  ? T['sys']['contentType']['sys']['id']
  : never;

export type ContentTypes = ContentType<EntryType>;

export const getContentType = <T extends EntryType>(entry: T): ContentType<EntryType> => {
  return entry.sys.contentType.sys.id;
};

export const isContentfulSpeaker = (entry: Speaker | undefined): entry is Speaker => {
  if (entry === undefined) return false;
  return entry.contentType === 'speaker';
};

export const isContentfulSponsor = (entry: Sponsor | undefined): entry is Sponsor => {
  if (entry === undefined) return false;
  return entry.contentType === 'sponsor';
};

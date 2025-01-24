import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_HOST } from '$env/static/private';
import { createClient, type EntriesQueries, type EntryCollection } from 'contentful';

import { getSessionEntries, getSpeakerEntries, type SpeakerSkeleton } from './index';

// Create a single Contentful client instance
const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  host: CONTENTFUL_HOST,
});

/** Helper type for Contentful queries */
type ContentfulEntries<C extends EntrySkeletonType> = Omit<
  EntriesQueries<C, 'WITHOUT_UNRESOLVABLE_LINKS'>,
  'content_type'
>;

/** List of all content types in Contentful */
export type ContentType =
  | 'speaker'
  | 'home'
  | 'sponsor'
  | 'talk'
  | 'timeSlot'
  | 'globalSettings'
  | 'cta';

/** Fetch all entries of a given Content Type */
export const getEntries = async <T extends EntrySkeletonType>(
  contentType: ContentType,
  query: ContentfulEntries<T> = {},
): Promise<EntryCollection<T, 'WITHOUT_UNRESOLVABLE_LINKS', never>> => {
  return client.withoutUnresolvableLinks.getEntries<T>({
    content_type: contentType,
    limit: 1000,
    include: 10,
    ...query,
  });
};

/** Fetch a single entry by ID */
export const getEntry = async <T extends EntrySkeletonType>(
  id: string,
): Promise<Entry<T, 'WITHOUT_UNRESOLVABLE_LINKS', never>> => {
  return client.withoutUnresolvableLinks.getEntry<T>(id, { include: 10 });
};

/** Paginate entries of a given content type */
export const paginateEntries =
  <T extends EntrySkeletonType>(content_type: ContentType) =>
  async (
    pageSize: number,
    page: number,
    query?: Record<string, unknown>,
  ): Promise<{
    items: Entry<T, 'WITHOUT_UNRESOLVABLE_LINKS', never>[];
    total: number;
  }> => {
    const response = await client.withoutUnresolvableLinks.getEntries<T>({
      content_type,
      ...query,
      skip: pageSize * (page - 1),
      limit: pageSize,
    });

    return {
      items: response.items as Entry<T, 'WITHOUT_UNRESOLVABLE_LINKS', never>[],
      total: response.total,
    };
  };

/** Slug type for fetching slugs from Contentful */
export type Slug = {
  slug: string;
};

import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeResourceFields {
  title?: EntryFieldTypes.Symbol;
  metaTitle?: EntryFieldTypes.Symbol;
  metaDescription?: EntryFieldTypes.Symbol;
  publishDate: EntryFieldTypes.Date;
  type: EntryFieldTypes.Symbol<'Blog Post' | 'Session'>;
  industry?: EntryFieldTypes.Symbol<
    'Crypto' | 'Financial Services' | 'High Tech' | 'Logistics' | 'Medical' | 'Retail'
  >;
  sdk?: EntryFieldTypes.Symbol<'.NET' | 'Go' | 'Java' | 'PHP' | 'Python' | 'TypeScript'>;
  platform?: EntryFieldTypes.Symbol<'Cloud' | 'Self-Hosted'>;
  developmentPattern?: EntryFieldTypes.Symbol<
    | 'Batch processing'
    | 'Event-driven architecture'
    | 'Saga pattern'
    | 'Scheduled jobs and cron'
    | 'State machines'
  >;
  link?: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  companySize?: EntryFieldTypes.Symbol<'2000-10000' | '250-2000' | '51-250' | '<50' | 'Megacorp'>;
  customerLogo?: EntryFieldTypes.AssetLink;
  content?: EntryFieldTypes.Text;
  quote?: EntryFieldTypes.Text;
  useCase?: EntryFieldTypes.Symbol;
  presenters?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePersonSkeleton>>;
  videoEmbed?: EntryFieldTypes.Symbol;
  cardImage?: EntryFieldTypes.AssetLink;
  suggestedContent?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeResourceSkeleton>>;
}

export type TypeResourceSkeleton = {
  fields: TypeResourceFields;
  contentTypeId: 'resource';
};

export type TypeResource<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeResourceSkeleton,
  Modifiers,
  Locales
>;

export const getSpeakerSlugs = async (): Promise<Slug[]> => {
  const entries = await getSpeakerEntries();
  const slugs = entries.items.map((entry) => ({
    slug: entry.fields.slug,
  }));

  return slugs.filter(({ slug }) => slug !== '');
};

export const getSessionSlugs = async (): Promise<Slug[]> => {
  const entries = await getSessionEntries();
  const slugs = entries.items.map((entry) => ({
    slug: entry.fields.slug,
  }));

  return slugs.filter(({ slug }) => slug !== '');
};

/** Fetch sessions by speaker */
export const getSessionsBySpeaker = async (
  speakerId: string,
): Promise<Entry<EntrySkeletonType>[]> => {
  try {
    const response = await getSessionEntries({ 'fields.speakers.sys.id': speakerId });
    return response.items;
  } catch (error) {
    console.error('Error fetching sessions by speaker:', error);
    return [];
  }
};

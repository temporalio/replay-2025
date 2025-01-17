import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_HOST } from '$env/static/private';
import {
  createClient,
  type EntriesQueries,
  type EntrySkeletonType,
  type EntryCollection,
  type Entry,
} from 'contentful';

import { isType } from '$lib/utilities/is-type';

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

/** Fetch slugs for a given content type */
export const getSlugs = async <T extends EntrySkeletonType>(
  content_type: ContentType,
  query: Omit<
    EntriesQueries<T, 'WITHOUT_UNRESOLVABLE_LINKS'>,
    'content_type' | 'skip' | 'select'
  > = {},
): Promise<Slug[]> => {
  let items: Entry<T, 'WITHOUT_UNRESOLVABLE_LINKS', never>[] = [];
  let total = 0;

  do {
    const content = await client.withoutUnresolvableLinks.getEntries<T>({
      content_type,
      skip: items.length,
      select: ['fields.slug'],
      ...query,
    });

    total = content.total;
    items = [...items, ...content.items];
  } while (items.length < total);

  return items
    .map((item) => (item.fields?.slug ? { slug: item.fields.slug } : undefined))
    .filter(isType<Slug>);
};

/** Fetch all speaker entries */
export const getSpeakerEntries = (query: ContentfulEntries<EntrySkeletonType> = {}) => {
  return client.getEntries({ ...query, content_type: 'speaker' });
};

/** Fetch all session entries */
export const getSessionEntries = (query: ContentfulEntries<EntrySkeletonType> = {}) => {
  return client.getEntries({ ...query, content_type: 'talk' });
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

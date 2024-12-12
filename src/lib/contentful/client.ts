import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_HOST } from '$env/static/private';
import contentful from 'contentful';
import type { Entry, EntryCollection, EntrySkeletonType } from 'contentful';
import type { ContentType } from './utilities/content-type';

const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  host: CONTENTFUL_HOST,
});

export const getEntries = async <T extends EntrySkeletonType>(
  contentType: ContentType<Entry<T>>,
  query: Omit<contentful.EntriesQueries<T, 'WITHOUT_UNRESOLVABLE_LINKS'>, 'content_type'> = {},
): Promise<EntryCollection<T, 'WITHOUT_UNRESOLVABLE_LINKS', never>> => {
  return client.withoutUnresolvableLinks.getEntries<T>({
    content_type: contentType,
    limit: 1000,
    include: 10,
    ...query,
  });
};

export const getEntry = async <T extends EntrySkeletonType>(
  id: string,
): Promise<Entry<T, 'WITHOUT_UNRESOLVABLE_LINKS', never>> => {
  return client.withoutUnresolvableLinks.getEntry(id, { include: 10 });
};

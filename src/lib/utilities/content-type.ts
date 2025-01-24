import type { Entry } from 'contentful';

export type ContentType<T extends Entry> = T extends Entry
  ? T['sys']['contentType']['sys']['id']
  : never;

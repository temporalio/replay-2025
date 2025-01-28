import {
  type ChainModifiers,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
  type LocaleCode,
} from 'contentful';
import { type SpeakerSkeleton } from './speaker';

export interface SessionFields {
  title: EntryFieldTypes.Symbol;
  url: EntryFieldTypes.Symbol;
  location?: EntryFieldTypes.Symbol;
  speakers?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SpeakerSkeleton>>;
  description: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Symbol;
}

export type SessionSkeleton = EntrySkeletonType<SessionFields, 'talk'>;
export type Session<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<SessionSkeleton, Modifiers, Locales>;

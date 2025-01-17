import {
  type ChainModifiers,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
  type LocaleCode,
} from 'contentful';

export interface SpeakerFields {
  fullName: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  jobTitle: EntryFieldTypes.Symbol;
  companyName: EntryFieldTypes.Symbol;
  bio?: EntryFieldTypes.Text;
  keynote: EntryFieldTypes.Boolean;
}

export type SpeakerSkeleton = EntrySkeletonType<SpeakerFields, 'speaker'>;
export type Speaker<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<SpeakerSkeleton, Modifiers, Locales>;

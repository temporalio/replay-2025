import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeSpeakerFields {
  fullName: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  jobTitle: EntryFieldTypes.Symbol;
  companyName: EntryFieldTypes.Symbol;
  keynote: EntryFieldTypes.Boolean;
}

export type TypeSpeakerSkeleton = EntrySkeletonType<TypeSpeakerFields, 'speaker'>;
export type TypeSpeaker<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSpeakerSkeleton, Modifiers, Locales>;

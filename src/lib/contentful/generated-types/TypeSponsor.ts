import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeSponsorFields {
  name: EntryFieldTypes.Symbol;
  sponsorType: EntryFieldTypes.Symbol<'Elite' | 'Impact' | 'Premier'>;
  darkLogo: EntryFieldTypes.AssetLink;
  lightLogo?: EntryFieldTypes.AssetLink;
  colorLogo?: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.Text;
  externalUrl?: EntryFieldTypes.Symbol;
}

export type TypeSponsorSkeleton = EntrySkeletonType<TypeSponsorFields, 'sponsor'>;
export type TypeSponsor<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSponsorSkeleton, Modifiers, Locales>;

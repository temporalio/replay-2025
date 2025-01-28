import {
  type ChainModifiers,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
  type LocaleCode,
} from 'contentful';

export interface SponsorFields {
  name: EntryFieldTypes.Symbol;
  sponsorType: EntryFieldTypes.Symbol<'Elite' | 'Premier' | 'Impact'>;
  darkLogo: EntryFieldTypes.AssetLink;
  lightLogo: EntryFieldTypes.AssetLink;
  colorLogo?: EntryFieldTypes.AssetLink;
  description: EntryFieldTypes.Text;
  externalUrl?: EntryFieldTypes.Symbol;
}

export type SponsorSkeleton = EntrySkeletonType<SponsorFields, 'sponsor'>;
export type Sponsor<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<SponsorSkeleton, Modifiers, Locales>;

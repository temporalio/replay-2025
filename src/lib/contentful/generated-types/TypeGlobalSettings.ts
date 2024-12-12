import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeGlobalSettingsFields {
  title: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Number;
  discountedPrice: EntryFieldTypes.Number;
  pricingFootnote?: EntryFieldTypes.Symbol;
}

export type TypeGlobalSettingsSkeleton = EntrySkeletonType<
  TypeGlobalSettingsFields,
  'globalSettings'
>;
export type TypeGlobalSettings<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeGlobalSettingsSkeleton, Modifiers, Locales>;

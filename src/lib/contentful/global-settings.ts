import { type ChainModifiers, type Entry, type EntryFieldTypes, type EntrySkeletonType, type LocaleCode } from "contentful";

export interface GlobalSettingsFields {
    title: EntryFieldTypes.Symbol;
    price: EntryFieldTypes.Number;
    discountedPrice: EntryFieldTypes.Number;
    pricingFootnote?: EntryFieldTypes.Symbol;
}

export type GlobalSettingsSkeleton = EntrySkeletonType<GlobalSettingsFields, 'globalSettings'>;
export type GlobalSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<GlobalSettingsSkeleton, Modifiers, Locales>;

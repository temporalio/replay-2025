import {
  type ChainModifiers,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
  type LocaleCode,
} from 'contentful';

export interface CTAFields {
  title: EntryFieldTypes.Symbol;
  text: EntryFieldTypes.Symbol;
  url: EntryFieldTypes.Text;
}

export type CTASkeleton = EntrySkeletonType<CTAFields, 'cta'>;
export type CTA<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  CTASkeleton,
  Modifiers,
  Locales
>;

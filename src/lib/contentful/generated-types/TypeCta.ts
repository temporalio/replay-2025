import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeCtaFields {
  title: EntryFieldTypes.Symbol;
  text: EntryFieldTypes.Symbol;
  url: EntryFieldTypes.Text;
}

export type TypeCtaSkeleton = EntrySkeletonType<TypeCtaFields, 'cta'>;
export type TypeCta<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCtaSkeleton, Modifiers, Locales>;

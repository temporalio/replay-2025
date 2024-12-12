import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeCtaSkeleton } from './TypeCta';
import type { TypeSpeakerSkeleton } from './TypeSpeaker';

export interface TypeHomeFields {
  title: EntryFieldTypes.Symbol;
  seoTitle: EntryFieldTypes.Symbol;
  seoDescription: EntryFieldTypes.Text;
  hero: EntryFieldTypes.Text;
  heroCta?: EntryFieldTypes.EntryLink<TypeCtaSkeleton>;
  promoHeader?: EntryFieldTypes.Symbol;
  promoCta?: EntryFieldTypes.EntryLink<TypeCtaSkeleton>;
  scheduleTextLeft?: EntryFieldTypes.Text;
  scheduleTextRight?: EntryFieldTypes.Text;
  day1Workshops: EntryFieldTypes.Text;
  workshopsCta: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCtaSkeleton>>;
  day1Hackathon: EntryFieldTypes.Text;
  hackathonCta: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCtaSkeleton>>;
  day23: EntryFieldTypes.Text;
  day23Cta: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCtaSkeleton>>;
  afterparty: EntryFieldTypes.Text;
  afterpartyCta?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCtaSkeleton>>;
  speakers?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSpeakerSkeleton>>;
  testimonial: EntryFieldTypes.Text;
  replay2024Cta: EntryFieldTypes.EntryLink<TypeCtaSkeleton>;
  feature1: EntryFieldTypes.Text;
  feature2: EntryFieldTypes.Text;
  feature3: EntryFieldTypes.Text;
  themeDescription: EntryFieldTypes.Text;
  location: EntryFieldTypes.Text;
  preFooterHeader: EntryFieldTypes.Symbol;
  preFooterCta: EntryFieldTypes.EntryLink<TypeCtaSkeleton>;
}

export type TypeHomeSkeleton = EntrySkeletonType<TypeHomeFields, 'home'>;
export type TypeHome<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHomeSkeleton, Modifiers, Locales>;

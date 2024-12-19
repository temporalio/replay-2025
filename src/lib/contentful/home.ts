import {
  type ChainModifiers,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
  type LocaleCode,
} from 'contentful';
import { type CTASkeleton } from './cta';
import { type SpeakerSkeleton } from './speaker';

export interface HomeFields {
  title: EntryFieldTypes.Symbol;
  seoTitle: EntryFieldTypes.Symbol;
  seoDescription: EntryFieldTypes.Text;
  hero: EntryFieldTypes.Text;
  heroCta?: EntryFieldTypes.EntryLink<CTASkeleton>;
  promoHeader?: EntryFieldTypes.Symbol;
  promoCta?: EntryFieldTypes.EntryLink<CTASkeleton>;
  scheduleTextLeft?: EntryFieldTypes.Text;
  scheduleTextRight?: EntryFieldTypes.Text;
  day1Workshops: EntryFieldTypes.Text;
  workshopsCta: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<CTASkeleton>>;
  day1Hackathon: EntryFieldTypes.Text;
  hackathonCta: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<CTASkeleton>>;
  day23: EntryFieldTypes.Text;
  day23Cta: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<CTASkeleton>>;
  afterparty: EntryFieldTypes.Text;
  afterpartyCta?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<CTASkeleton>>;
  speakers?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SpeakerSkeleton>>;
  testimonial: EntryFieldTypes.Text;
  replay2024Cta: EntryFieldTypes.EntryLink<CTASkeleton>;
  feature1: EntryFieldTypes.Text;
  feature2: EntryFieldTypes.Text;
  feature3: EntryFieldTypes.Text;
  themeDescription: EntryFieldTypes.Text;
  location: EntryFieldTypes.Text;
  preFooterHeader: EntryFieldTypes.Symbol;
  preFooterCta: EntryFieldTypes.EntryLink<CTASkeleton>;
}

export type HomeSkeleton = EntrySkeletonType<HomeFields, 'home'>;
export type Home<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  HomeSkeleton,
  Modifiers,
  Locales
>;

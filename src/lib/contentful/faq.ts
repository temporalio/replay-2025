import {
  type ChainModifiers,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
  type LocaleCode,
} from 'contentful';
import { type QuestionsSkeleton } from './questions';

export interface FAQFields {
  title: EntryFieldTypes.Symbol;
  generalQuestions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<QuestionsSkeleton>>;
  ticketingQuestions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<QuestionsSkeleton>>;
  miscQuestions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<QuestionsSkeleton>>;
}

export type FAQSkeleton = EntrySkeletonType<FAQFields, 'faq'>;
export type FAQ<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  FAQSkeleton,
  Modifiers,
  Locales
>;

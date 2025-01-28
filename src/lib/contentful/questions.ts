import {
  type ChainModifiers,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
  type LocaleCode,
} from 'contentful';

export interface QuestionsFields {
  question: EntryFieldTypes.Symbol;
  answer: EntryFieldTypes.Text;
}

export type QuestionsSkeleton = EntrySkeletonType<QuestionsFields, 'questions'>;
export type Questions<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<QuestionsSkeleton, Modifiers, Locales>;

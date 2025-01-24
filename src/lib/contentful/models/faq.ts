import type { Entry } from 'contentful';
import type { Questions, FAQ } from '../index';
import { isType } from '../../utilities/is-type';

export type ContentType<T extends Entry> = T extends Entry
  ? T['sys']['contentType']['sys']['id']
  : never;

export type FAQs = {
  title: string;
  miscQuestions: QuestionAndAnswer[];
  ticketingQuestions: QuestionAndAnswer[];
  generalQuestions: QuestionAndAnswer[];
  contentType: ContentType<FAQ<'WITHOUT_UNRESOLVABLE_LINKS', never>>;
  entityId: string;
};

export type QuestionAndAnswer = {
  question: string;
  answer: string;
  entityId: string;
  contentType: ContentType<Questions<'WITHOUT_UNRESOLVABLE_LINKS', never>>;
};

export const toQuestionAndAnswer = (
  questionAndAnswer: Questions<'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined,
): QuestionAndAnswer | undefined => {
  if (questionAndAnswer === undefined) return;
  return {
    question: questionAndAnswer.fields.question,
    answer: questionAndAnswer.fields.answer,
    entityId: questionAndAnswer.sys.id,
    contentType: 'questions',
  };
};

export const toQuestionList = (
  questionList: (Questions<'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined)[],
): QuestionAndAnswer[] => {
  return questionList.map(toQuestionAndAnswer).filter(isType<QuestionAndAnswer>);
};

export const toFAQ = (
  faq: FAQ<'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined,
): FAQs | undefined => {
  if (faq === undefined) return;
  return {
    title: faq.fields.title,
    miscQuestions: toQuestionList(faq.fields.miscQuestions),
    generalQuestions: toQuestionList(faq.fields.generalQuestions),
    ticketingQuestions: toQuestionList(faq.fields.ticketingQuestions),
    contentType: 'faq',
    entityId: faq.sys.id,
  };
};

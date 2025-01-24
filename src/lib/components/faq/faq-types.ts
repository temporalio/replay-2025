import { isType } from '$lib/utilities/is-type';

export type FAQ = {
  title: string;
  questionsAndAnswers: QuestionAndAnswer[];
  entityId: string;
};

export type QuestionAndAnswer = {
  question: string;
  answer: string;
  entityId: string;
};

export const toQuestionList = (
  questionList: (Questions<'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined)[],
): QuestionAndAnswer[] => {
  return questionList.map(toQuestionAndAnswer).filter(isType<QuestionAndAnswer>);
};

export const toFAQ = (
  faq: TypeFaq<'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined,
): FAQ | undefined => {
  if (faq === undefined) return;
  return {
    title: faq.fields.title,
    questionsAndAnswers: toQuestionList(faq.fields.questionList),
    contentType: 'faq',
    entityId: faq.sys.id,
  };
};

import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { getFAQEntries } from '$lib/contentful/index';
import { sentenceCase } from 'change-case';
import type { PageServerLoad } from './$types.js';
import { compileMarkdown } from '$lib/utilities/compile-markdown.js';

export const prerender = true;

const questionSchema = z.object({
  fields: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

const faqSchema = z
  .object({
    title: z.string(),
  })
  .catchall(z.array(questionSchema));

export const load: PageServerLoad = async () => {
  const [faq] = (await getFAQEntries()).items;

  if (!faq) return error(404, 'No FAQ found');

  const { title, ...questions } = faqSchema.parse(faq.fields);

  const categories = await Promise.all(
    Object.entries(questions).map(async ([category, content]) => {
      const title = sentenceCase(category);
      const questions = await Promise.all(
        content.map(async ({ fields }) => ({
          question: await compileMarkdown(fields.question),
          answer: await compileMarkdown(fields.answer),
        })),
      );

      return {
        title,
        questions,
      };
    }),
  );

  return { title, categories };
};

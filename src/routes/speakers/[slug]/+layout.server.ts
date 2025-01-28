import { getSpeaker } from '$lib/contentful/client';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import type { LayoutServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: LayoutServerLoad = async ({ params }) => {
  const slug = params?.slug;

  const speaker = await getSpeaker(slug);
  if (!speaker) {
    throw error(404, 'Speaker not found');
  }

  const markdown = await compileMarkdown(speaker.fields.bio ?? '');

  return {
    speaker: {
      ...speaker,
      content: markdown,
    },
  };
};

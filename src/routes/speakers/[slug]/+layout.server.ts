import { getSpeaker } from '$lib/contentful/client';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import { error, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    throw error(400, 'Speaker slug is missing');
  }

  const speaker = await getSpeaker(slug);

  if (!speaker) {
    throw error(404, 'Speaker not found');
  }

  const markdown = await compileMarkdown(speaker.fields.bio ?? '', true);

  return {
    speaker: {
      ...speaker,
      content: markdown, // Add compiled markdown
    },
  };
};

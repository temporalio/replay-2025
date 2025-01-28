import { getSpeaker } from '$lib/contentful/client';
import type { Speaker } from '$lib/contentful/speaker.js';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import type { PageServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

const getPortrait = (speaker: Speaker<never, string>) => {
  const { image } = speaker.fields;
  if (!image) return null;
  if ('fields' in image) {
    const url = image.fields.file?.url;
    return url + '?w=340&h=340&fm=webp';
  }
  return '';
};

export const load: PageServerLoad = async ({ params }) => {
  const speaker = await getSpeaker(params.slug);

  if (!speaker) {
    throw error(404, 'Speaker not found');
  }

  const portrait = getPortrait(speaker);
  const biography = await compileMarkdown(speaker.fields.bio);

  return {
    portrait,
    biography,
    speaker: speaker.fields,
  };
};

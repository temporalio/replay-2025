import { getSessionEntries, getSpeakerEntries } from '$lib/contentful/index.js';
import type { Speaker } from '$lib/contentful/speaker.js';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import { z } from 'zod';
import type { PageServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

const speakerSchema = z.object({
  sys: z.object({
    id: z.string(),
  }),
  fields: z.object({
    jobTitle: z.string(),
    companyName: z.string(),
    bio: z.string().optional(),

    image: z.object({
      fields: z.object({
        file: z.object({
          url: z.string(),
        }),
      }),
    }),
  }),
});

const getPortrait = (speaker: Speaker<never, string>) => {
  const { image } = speaker.fields;
  if (!image) return null;
  if ('fields' in image) {
    const url = image.fields.file?.url;
    return url + '?w=340&h=340&fm=webp';
  }
  throw new Error('Invalid image');
};

export const load: PageServerLoad = async ({ params }) => {
  const speakers = await getSpeakerEntries({ 'fields.slug': params.slug });
  const [speaker] = speakers.items;

  if (!speaker) throw error(404, 'Speaker not found');

  const talks = await getSessionEntries({ 'fields.speakers.sys.id': speaker.sys.id });
  const portrait = getPortrait(speaker);
  const biography = await compileMarkdown(speaker.fields.bio);

  console.log(JSON.stringify(talks.items, null, 2));

  return {
    portrait,
    biography,
    speaker: speaker.fields,
    talks: talks.items,
    hasTalks: talks.items.length > 0,
  };
};

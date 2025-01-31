import { getSessionEntries, getSpeakerEntries, getTimeSlotEntries } from '$lib/contentful/index.js';
import type { Speaker } from '$lib/contentful/speaker.js';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import type { PageServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';
import type { SessionSkeleton } from '$lib/contentful/session.js';
import { formatSpeakerDate } from '$lib/utilities/format-date.js';

export const prerender = true;

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

  const portrait = getPortrait(speaker);
  const biography = await compileMarkdown(speaker.fields.bio);

  const talks = await getSessionEntries({ 'fields.speakers.sys.id': speaker.sys.id });
  const timeSlots = await getTimeSlotEntries();

  const talksWithDate = talks.items.map((talk) => {
    const timeSlot = timeSlots.items.find((slot) =>
      slot.fields.talk?.some((t) => t.sys.id === talk.sys.id),
    );

    const startTime = timeSlot?.fields.startTime;
    const endTime = timeSlot?.fields.endTime;
    const date = startTime && endTime ? formatSpeakerDate(startTime, endTime) : 'Schedule TBA';

    return {
      fields: talk.fields as unknown as SessionSkeleton['fields'],
      sys: talk.sys,
      date,
    };
  });

  return {
    portrait,
    biography,
    speaker: speaker.fields,
    talks: talksWithDate,
    hasTalks: talksWithDate.length > 0,
  };
};

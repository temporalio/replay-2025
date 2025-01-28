import { getSessionEntries, getSpeakerEntries, getTimeSlotEntries } from '$lib/contentful/index.js';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import type { PageServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';
import type { Speaker } from '$lib/contentful/speaker.js';

export const prerender = true;

const getPortrait = (speaker: Speaker<never, string>) => {
  const { image } = speaker.fields;
  if (!image) return null;
  if ('fields' in image) {
    const url = image.fields.file?.url;
    return url ? `${url}?w=340&h=340&fm=webp` : null;
  }
  throw new Error('Invalid image format');
};

export const load: PageServerLoad = async ({ params }) => {
  const sessions = await getSessionEntries({ 'fields.slug': params.slug });
  const [session] = sessions.items;

  if (!session) throw error(404, 'Session not found');

  const sessionSpeakers = session.fields.speakers ?? [];

  const speakers =
    sessionSpeakers.length > 0
      ? await getSpeakerEntries({ 'sys.id[in]': sessionSpeakers.map((s) => s.sys.id).join(',') })
      : { items: [] };

  const speakersWithPortraits = speakers.items.map((speaker) => ({
    ...speaker,
    portrait: getPortrait(speaker),
  }));

  const description = await compileMarkdown(session.fields.description);
  const timeSlots = await getTimeSlotEntries();
  const timeSlot = timeSlots.items.find((slot) =>
    slot.fields.talk?.some((talk) => talk.sys.id === session.sys.id),
  );

  return {
    description,
    session: session.fields,
    speakers: speakersWithPortraits,
    hasSpeakers: speakersWithPortraits.length > 0,
    startTime: timeSlot?.fields.startTime,
    endTime: timeSlot?.fields.endTime,
  };
};

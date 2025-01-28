import { getSessionEntries, getSpeakerEntries, getTimeSlotEntries } from '$lib/contentful/index.js';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import type { PageServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';
export const prerender = true;


export const load: PageServerLoad = async ({ params }) => {
  const sessions = await getSessionEntries({ 'fields.slug': params.slug });
  const [session] = sessions.items;

  if (!session) throw error(404, 'Session not found');

  const speakers = await getSpeakerEntries({ 'fields.speakers.sys.id': session.sys.id });
  const date = await getTimeSlotEntries({'fields.'})
  const description = await compileMarkdown(session.fields.description);

  return {
    speaker : session.fields.speakers,
    description,

    hasSpeakers: speakers.items.length > 0,
  };
};

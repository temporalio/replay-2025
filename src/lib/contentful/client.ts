import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_HOST } from '$env/static/private';
import { createClient } from 'contentful';
import type { Entry, EntrySkeletonType, UnresolvedLink } from 'contentful';
import type { Speaker } from './speaker';
import type { Session } from './session';
import type { TimeSlot } from './time-slot';
import type { QuestionsSkeleton } from '$lib/contentful/questions';
import { compileMarkdown } from '$lib/utilities/compile-markdown';

import { getSessionEntries, getSpeakerEntries, getTimeSlotEntries } from './index';

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  host: CONTENTFUL_HOST,
});

export type ContentType =
  | 'speaker'
  | 'home'
  | 'sponsor'
  | 'talk'
  | 'timeSlot'
  | 'globalSettings'
  | 'cta';

export type Slug = {
  slug: string;
};

export const getSpeakerSlugs = async (): Promise<Slug[]> => {
  const entries = await getSpeakerEntries();
  const slugs = entries.items.map((entry) => ({
    slug: entry.fields.slug,
  }));

  return slugs.filter(({ slug }) => slug !== '');
};

export const getSpeaker = async (slug: string): Promise<Speaker<never, string> | undefined> => {
  const content = await getSpeakerEntries();

  if (!content.items) return undefined;
  return content.items.find((entry) => entry.fields.slug === slug);
};

export const getEntry = async <T extends EntrySkeletonType>(
  id: string,
): Promise<Entry<T, 'WITHOUT_UNRESOLVABLE_LINKS', never>> => {
  return client.withoutUnresolvableLinks.getEntry<T>(id, { include: 10 });
};

export const getSessionSlugs = async (): Promise<Slug[]> => {
  const entries = await getSessionEntries();
  const slugs = entries.items.map((entry) => ({
    slug: entry.fields.slug,
  }));

  return slugs.filter(({ slug }) => slug !== '');
};

export const getSession = async (slug: string): Promise<Session<never, string> | undefined> => {
  const content = await getSessionEntries();

  if (!content.items) return undefined;

  return content.items.find((entry) => entry.fields.slug === slug);
};

export const getSessionsBySpeaker = async (
  speakerId: string,
): Promise<Entry<EntrySkeletonType>[]> => {
  try {
    const response = await getSessionEntries({ 'fields.speakers.sys.id': speakerId });
    return response.items;
  } catch (error) {
    console.error('Error fetching sessions by speaker:', error);
    return [];
  }
};

export const getSessionById = async (id: string): Promise<Session<never, string> | undefined> => {
  const content = await getSessionEntries();

  if (!content.items) return undefined;

  return content.items.find((entry) => entry.sys.id === id);
};

export const getTimeSlotsByDate = async (
  date: string,
): Promise<TimeSlot<'WITHOUT_UNRESOLVABLE_LINKS', never>[]> => {
  const content = await getTimeSlotEntries();

  if (!content.items) return [];

  return content.items
    .filter((entry) => entry.fields.startTime.startsWith(date))
    .sort((a, b) => new Date(a.fields.startTime).getTime() - new Date(b.fields.startTime).getTime())
    .map((entry) => entry as TimeSlot<'WITHOUT_UNRESOLVABLE_LINKS', never>);
};

export const compileQuestions = async (
  questions: (UnresolvedLink<'Entry'> | Entry<QuestionsSkeleton, undefined, string>)[] = [],
): Promise<Entry<QuestionsSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', never>[]> => {
  return Promise.all(
    questions
      .filter(
        (question): question is Entry<QuestionsSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', never> =>
          !!question && 'fields' in question,
      )
      .map(async (question) => ({
        ...question,
        fields: {
          ...question.fields,
          answer: await compileMarkdown(question.fields.answer ?? ''),
        },
      })),
  );
};

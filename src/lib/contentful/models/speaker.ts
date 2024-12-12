import type { Entry } from 'contentful';
import type { TypeSpeakerSkeleton, TypeSpeaker } from '../generated-types';
import { toImage, type Image } from './image';
import type { ContentType } from '../utilities/content-type';
import { isType } from '$lib/utilities/is-type';

export type Speaker = {
  fullName: string;
  image: Image | undefined;
  jobTitle: string | undefined;
  companyName: string | undefined;
  keynote: boolean;
  contentType: ContentType<TypeSpeaker<'WITHOUT_UNRESOLVABLE_LINKS', never>>;
};

export const toSpeaker = (
  speaker: Entry<TypeSpeakerSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined,
): Speaker | undefined => {
  if (speaker === undefined) return;
  return {
    fullName: speaker.fields.fullName,
    image: toImage(speaker.fields.image),
    jobTitle: speaker.fields.jobTitle,
    companyName: speaker.fields.companyName,
    keynote: speaker.fields.keynote,
    contentType: 'speaker',
  };
};

export const toSpeakers = (
  items:
    | (Entry<TypeSpeakerSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', never> | undefined)[]
    | undefined,
): Speaker[] => (items ? items.map(toSpeaker).filter(isType<Speaker>) : []);

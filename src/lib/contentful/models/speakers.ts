import type { Speaker } from '../index';

export type SimpleSpeaker = {
  image: string;
  name: string;
  company: string;
  jobTitle: string;
  bio: string;
  contentType: 'speaker';
};

export const toSpeaker = (
  speaker: Speaker<'WITHOUT_UNRESOLVABLE_LINKS', never>,
): SimpleSpeaker => {
  return {
    image: speaker.fields.image?.fields?.file?.url ?? '',
    name: speaker.fields.fullName,
    company: speaker.fields.companyName,
    jobTitle: speaker.fields.jobTitle,
    bio: speaker.fields.bio ?? '', 
    contentType: 'speaker',
  };
};

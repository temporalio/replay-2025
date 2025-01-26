import type { Session, Speaker } from '../index';
import type { SimpleSpeaker } from './speakers';
import { toSpeaker } from './speakers';

export type SimpleSession = {
  title: string;
  location?: string;
  speakers?: SimpleSpeaker[];
  description: string;
  slug: string;
  contentType: 'session';
};

export const toSession = (
  session: Session<'WITHOUT_UNRESOLVABLE_LINKS', never>,
): SimpleSession => {
  return {
    title: session.fields.title,
    location: session.fields.location,
    speakers:
      session.fields.speakers
        ?.filter(
          (speaker): speaker is Speaker<'WITHOUT_UNRESOLVABLE_LINKS', never> =>
            speaker !== undefined,
        )
        .map(toSpeaker) ?? [],
    description: session.fields.description,
    slug: session.fields.slug,
    contentType: 'session',
  };
};

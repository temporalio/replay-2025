import type { TimeSlot, Session } from '../index';
import { toSession } from './session';

export type Slot = {
  title: string;
  startTime: string;
  endTime: string;
  talk?: Session<'WITHOUT_UNRESOLVABLE_LINKS', never>[];
  contentType: 'slot';
};

export const toTimeSlot = (slot: TimeSlot<'WITHOUT_UNRESOLVABLE_LINKS', never>): Slot => {
  return {
    title: slot.fields.title,
    startTime: slot.fields.startTime,
    endTime: slot.fields.endTime,
    talk:
      slot.fields.talk
        ?.filter(
          (session): session is Session<'WITHOUT_UNRESOLVABLE_LINKS', never> =>
            session !== undefined,
        )
        .map((session) => toSession(session as Session<'WITHOUT_UNRESOLVABLE_LINKS', never>)) ?? [],
    contentType: 'slot',
  };
};

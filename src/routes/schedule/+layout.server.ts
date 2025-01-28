import { getSessionById, getTimeSlotsByDate } from '$lib/contentful/client';
import type { LayoutServerLoad } from './$types.js';
import type { Entry } from 'contentful';
import type { SessionSkeleton } from '$lib/contentful/session';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const eventDates = ['2025-03-03', '2025-03-04', '2025-03-05'];

  const timeSlotsByDay = await Promise.all(
    eventDates.map(async (date) => {
      const slots = await getTimeSlotsByDate(date);

      const filteredSlots = await Promise.all(
        slots.map(async (slot) => {
          const fullTalks = await Promise.all(
            (slot.fields.talk ?? [])
              .filter(
                (talk): talk is Entry<SessionSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', never> =>
                  !!talk && 'sys' in talk && 'id' in talk.sys,
              )
              .map(async (talk) => getSessionById(talk.sys.id)),
          );

          return {
            ...slot,
            fields: {
              ...slot.fields,
              talk: fullTalks,
            },
          };
        }),
      );

      return { date, slots: filteredSlots };
    }),
  );

  return {
    timeSlotsByDay: {
      day1: timeSlotsByDay[0]?.slots ?? [],
      day2: timeSlotsByDay[1]?.slots ?? [],
      day3: timeSlotsByDay[2]?.slots ?? [],
    },
  };
};

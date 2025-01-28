import {
  type ChainModifiers,
  type Entry,
  type EntryFieldTypes,
  type EntrySkeletonType,
  type LocaleCode,
} from 'contentful';
import { type SessionSkeleton } from './session';

export interface TimeSlotFields {
  title: EntryFieldTypes.Symbol;
  startTime: EntryFieldTypes.Date;
  endTime: EntryFieldTypes.Date;
  talk?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SessionSkeleton>>;
}

export type TimeSlotSkeleton = EntrySkeletonType<TimeSlotFields, 'timeSlot'>;
export type TimeSlot<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TimeSlotSkeleton, Modifiers, Locales>;

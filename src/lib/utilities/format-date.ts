import { formatTime } from '$lib/utilities/format-time';

export const formatSessionDate = (start: string, end: string): string => {
  if (!start || !end) return 'Invalid date';

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return 'Invalid date';
  }

  const formattedDate = startDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const startTime = formatTime(startDate.toISOString());
  const endTime = formatTime(endDate.toISOString());

  return `${formattedDate} · ${startTime} - ${endTime}`;
};

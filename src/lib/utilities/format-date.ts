import { formatTime } from '$lib/utilities/format-time';

export const formatDate = (start: string, end: string): string => {
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

  const startTime = formatTime(start);
  const endTime = formatTime(end);

  return `${formattedDate} • ${startTime} - ${endTime}`;
};

export const formatSpeakerDate = (start: string, end: string): string => {
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

  const startTime = formatTime(start);
  const endTime = formatTime(end);

  return `${formattedDate} <br>${startTime} - ${endTime}`;
};

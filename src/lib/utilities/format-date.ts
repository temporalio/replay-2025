export const formatSessionDateTime = (startIso: string, endIso: string): string => {
  if (!startIso || !endIso) return 'Invalid date';

  const startDate = new Date(startIso);
  const endDate = new Date(endIso);

  const formattedDate = startDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const startTime = startDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const endTime = endDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return `${formattedDate} · ${startTime} - ${endTime}`;
}

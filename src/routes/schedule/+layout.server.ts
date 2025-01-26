import { getSessionEntries } from './../../lib/contentful/index';

import type { LayoutServerLoad } from './$types.js';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  const sessions = await getSessionEntries();

  return { sessions: sessions.items };
};

import { getSession } from '$lib/contentful/client';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import type { LayoutServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: LayoutServerLoad = async ({ params }) => {
  const slug = params?.slug;

  const session = await getSession(slug);
  if (!session) {
    throw error(404, 'Session not found');
  } 

  const markdown = await compileMarkdown(session.fields.description ?? '', true);

  return {
    session: {
      ...session,
      content: markdown,
    },
  };
};
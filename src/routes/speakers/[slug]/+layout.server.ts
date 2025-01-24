import { getBlogPost } from '$lib/contentful/service';
import type { BlogPost } from '$lib/contentful/models/blog';
import { compileMarkdown } from '$lib/contentful/utilities/compile-markdown';
import { error, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }): Promise<{ post: BlogPost }> => {
  const post = await getSpeaker(params?.slug);

  return {
    post: {
      ...post,
      content: markdown,
    },
  };
};

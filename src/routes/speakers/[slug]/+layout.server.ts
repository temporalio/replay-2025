import { getSpeaker } from '$lib/contentful/client'
import type { BlogPost } from '$lib/contentful/models/blog';
import { compileMarkdown } from '$lib/utilities/compile-markdown';
import { error, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }): Promise<{ post: BlogPost }> => {
    const post = await getSpeaker(params?.slug);
      const markdown = await compileMarkdown(post.content, true);

  return {
    post: {
      ...post,
      content: markdown,
    },
  };
};

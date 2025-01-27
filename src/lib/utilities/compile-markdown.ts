import { h } from 'hastscript';
import { unified } from 'unified';
import githubFlavored from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import addClasses from './plugins/add-classes';

export const compileMarkdown = async (
  markdown: string = '',
  autolinkHeadings = false,
): Promise<string> => {
  const processor = unified()
    .use(remarkParse)
    .use(githubFlavored)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(addClasses)
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypeExternalLinks, {
      target: '_blank',
      rel: ['noopener'],
    })
    .use(rehypeStringify, { allowDangerousHtml: true });

  if (autolinkHeadings) {
    processor.use(rehypeAutolinkHeadings, {
      behavior: 'append',
      content() {
        return h('span', { className: 'ml-4' }, '#');
      },
    });
  }

  const file = await processor.process(markdown);

  return String(file).trim();
};

// TO DO: Need to figure out why this isn't rendering things quite right? Might be the prose and not the markdown compiler.

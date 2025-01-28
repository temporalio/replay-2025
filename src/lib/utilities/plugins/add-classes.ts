import type { Plugin } from 'unified';
import type { Element, Text, Parent, Properties } from 'hast';
import { visit } from 'unist-util-visit';

const CLASS_PATTERN = /\{\s*((?:\.[\w-]+\s*)+)\}/;

const CLASS_SPLITTER = /\.([\w-]+)\s*/g;

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const;

type MatchingTag = (typeof tags)[number];

interface MatchingElement extends Element {
  tagName: MatchingTag;
  properties: Properties;
}

const isMatchingElement = (node: unknown): node is MatchingElement & Parent => {
  if (!node || typeof node !== 'object') return false;
  if (!('type' in node) || typeof node.type !== 'string') return false;
  if (!('tagName' in node) || !('children' in node)) return false;
  if (!Array.isArray((node as Parent).children)) return false;

  return tags.includes((node as Element).tagName as MatchingTag);
};

const isTextNode = (node: unknown): node is Text => {
  return (
    !!node &&
    typeof node === 'object' &&
    'type' in node &&
    node.type === 'text' &&
    'value' in node &&
    typeof node.value === 'string'
  );
};

const extractClasses = (input: string): string[] | null => {
  const match = input.match(CLASS_PATTERN);
  if (!match) return null;

  const classString = match[1];
  const classes: string[] = [];
  let classMatch;

  while ((classMatch = CLASS_SPLITTER.exec(classString)) !== null) {
    classes.push(classMatch[1]);
  }

  return classes;
};

const addClasses: Plugin = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (isMatchingElement(node)) {
        const element = node as MatchingElement & Parent;

        for (const child of element.children) {
          if (isTextNode(child)) {
            const classes = extractClasses(child.value);
            if (!classes) continue;

            child.value = child.value.replace(CLASS_PATTERN, '').trim();

            if (!element.properties) element.properties = {};
            if (!element.properties.className) element.properties.className = [];

            if (Array.isArray(element.properties.className)) {
              element.properties.className.push(...classes);
            }
          }
        }
      }
    });
  };
};

export default addClasses;

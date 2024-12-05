declare module '*.md' {
  import type { SvelteComponent } from 'svelte';

  export default SvelteComponent<{ class?: string; as?: keyof HTMLElementTagNameMap }>;

  export const metadata: Record<string, unknown>;
}

type Extend<
  T extends keyof import('svelte/elements').SvelteHTMLElements,
  P extends Record<string, unknown> = {},
> = Omit<Partial<import('svelte/elements').SvelteHTMLElements[T]>, keyof P | 'class'> & P;

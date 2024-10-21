declare module '*.md' {
  import type { SvelteComponent } from 'svelte';

  export default SvelteComponent<{ class?: string; as?: keyof HTMLElementTagNameMap }>;

  export const metadata: Record<string, unknown>;
}

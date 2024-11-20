<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  const { href, children, ...props }: Omit<HTMLAnchorAttributes, 'class'> = $props();
</script>

<a
  {href}
  class="font-label block w-full whitespace-break-spaces bg-slate-950 px-6 py-4 text-center font-bold uppercase text-white transition-colors hover:bg-slate-900"
  {...props}
>
  {#if children}
    {@render children()}
  {/if}
</a>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge as merge } from 'tailwind-merge';

  const {
    title,
    badge,
    background,
    children,
  }: {
    title: string;
    badge?: string;
    background: 'teal' | 'green' | 'pink';
    children?: Snippet;
  } = $props();

  const backgroundColor = $derived(
    {
      teal: 'bg-teal',
      green: 'bg-green',
      pink: 'bg-pink',
    }[background],
  );
</script>

{#snippet callout({ badge }: { badge: string })}
  <p class="bg-pink p-3 font-semibold uppercase text-white md:rotate-180">
    {badge}
  </p>
{/snippet}

<section class={merge('flex w-full flex-col gap-1 md:flex-row')}>
  <header
    class={merge(
      'md:orientation-sideways md:vertical-writing-lr flex w-full max-w-fit items-center justify-center gap-4 whitespace-nowrap p-4 md:flex-row-reverse',
      backgroundColor,
    )}
  >
    <h2 class="py-3 font-jaro text-2xl md:rotate-180">
      {title}
    </h2>
    {#if badge}
      {@render callout({ badge })}
    {/if}
  </header>
  <div class={merge('w-full', backgroundColor)}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</section>

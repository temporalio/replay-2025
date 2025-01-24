<script lang="ts" module>
  export type EventProps = {
    time: string;
    title: string;
    description: string;
    children?: Snippet;
    class?: string;
  };
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge as merge } from 'tailwind-merge';

  const { time, title, description, children, class: className }: EventProps = $props();
</script>

<div
  class="flex w-full flex-col items-center gap-6 p-6 after:w-full after:bg-line after:bg-center after:bg-no-repeat after:text-center after:font-jaro after:text-2xl after:text-green-dark after:content-['OR'] last:after:content-none md:items-start"
>
  <div class={merge('flex w-full flex-col gap-4 text-2xl text-black xl:flex-row', className)}>
    <div class="w-full">
      <p class="font-pixelated uppercase">{time}</p>
      <h3 class="title-small">{title}</h3>
      <p class="font-light">{@html description}</p>
    </div>
    {#if children}
      <div class="flex w-full flex-col items-center gap-4">
        {@render children()}
      </div>
    {/if}
  </div>
</div>

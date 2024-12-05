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
  class="after:bg-line flex w-full flex-col items-center gap-6 p-6 after:w-full after:bg-center after:bg-no-repeat after:text-center after:font-jaro after:text-2xl after:text-green-dark after:content-['OR'] last:after:content-none md:items-start"
>
  <div class={merge('flex w-full flex-col gap-4 text-2xl text-black md:flex-row', className)}>
    <div class="w-full space-y-2">
      <p class="font-pixelated uppercase">{time}</p>
      <h3 class="font-jaro text-6xl">{title}</h3>
      <p class="font-light">{description}</p>
    </div>
    {#if children}
      <div class="flex w-full flex-col items-center gap-4">{@render children()}</div>
    {/if}
  </div>
</div>

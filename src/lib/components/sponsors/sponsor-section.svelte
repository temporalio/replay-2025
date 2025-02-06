<script lang="ts">
  import SponsorDark from './sponsor-dark.svelte';
  import type { Sponsor } from '$lib/contentful/sponsor';

  export let title: string;
  export let sponsors: Sponsor<never, string>[];
</script>

<div class="w-full gap-8">
  <p class="py-4 text-xl uppercase text-teal">{title}</p>
  <div class="flex w-full flex-col items-center gap-10 border border-grey bg-black p-8">
    {#each sponsors as sponsor}
      <SponsorDark {sponsor} />
    {/each}
  </div>
</div>

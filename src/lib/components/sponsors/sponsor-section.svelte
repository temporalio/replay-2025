<script lang="ts">
  import SponsorDark from './sponsor-dark.svelte';
  import type { Sponsor } from '$lib/contentful/sponsor';

  export let title: string;
  export let sponsors: Sponsor<never, string>[];
</script>

<div>
  <p class="py-8 text-2xl uppercase text-teal">{title}</p>
  <div class="flex w-full flex-col items-center border border-grey bg-black px-6">
    {#each sponsors as sponsor}
      <SponsorDark {sponsor} />
    {/each}
  </div>
</div>

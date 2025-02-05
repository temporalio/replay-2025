<script lang="ts">
  import AbstractBanner from '$components/abstract-banner.svelte';
  import SponsorSection from '$components/sponsors/sponsor-section.svelte';

  const { data } = $props();
  const { elite, premier, impact } = data;
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<AbstractBanner />

<section class="relative bg-grid">
  {#if elite.length}
    <SponsorSection title="Elite Sponsors" sponsors={elite} />
  {/if}
  {#if premier.length}
    <SponsorSection title="Premier Sponsors" sponsors={premier} />
  {/if}
  {#if impact.length}
    <SponsorSection title="Impact Sponsors" sponsors={impact} />
  {/if}
</section>

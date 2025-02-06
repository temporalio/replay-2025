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

<section class="flex flex-col items-center justify-center bg-grid">
  <div class="flex max-w-6xl flex-col justify-start gap-6 p-6 pb-16 pt-36">
    <h1 class="hero-subtitle text-4xl uppercase text-white lg:text-5xl">Sponsors</h1>
    {#if elite.length}
      <SponsorSection title="Elite Sponsors" sponsors={elite} />
    {/if}
    {#if premier.length}
      <SponsorSection title="Premier Sponsors" sponsors={premier} />
    {/if}
    {#if impact.length}
      <SponsorSection title="Impact Sponsors" sponsors={impact} />
    {/if}
  </div>
</section>

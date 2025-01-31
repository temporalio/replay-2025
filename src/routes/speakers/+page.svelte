<script lang="ts">
  import Footer from '$components/footer.svelte';
  import Tickets from '$components/tickets.svelte';
  import Speakers from '$components/speaker/speakers.svelte';
  import AbstractBanner from '$components/abstract-banner.svelte';
  import type { Entry } from 'contentful';
  import type { SpeakerSkeleton } from '$lib/contentful';

  const { data } = $props();
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<AbstractBanner />
<Speakers
  speakers={data.speakers as Entry<SpeakerSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]}
  animation={false}
  home={false}
/>
<Tickets heading="Build the future of scalable, resilient systems" />

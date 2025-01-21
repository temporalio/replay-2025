<script lang="ts">
  import Footer from '$components/footer.svelte';
  import Tickets from '$components/tickets.svelte';
  import Speakers from '$components/speaker/speakers.svelte';
import AbstractBanner from '$components/abstract-banner.svelte';

  const { data } = $props();
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>
<AbstractBanner/>
<Speakers speakers={data.speakers} />
<Tickets heading="Build the future of scalable, resilient systems" />
<Footer />

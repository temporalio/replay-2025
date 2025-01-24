<script lang="ts">
  import Footer from '$components/footer.svelte';
  import Tickets from '$components/tickets.svelte';
  import Speakers from '$components/speaker/speakers.svelte';
  import AbstractBanner from '$components/abstract-banner.svelte';

  const { data } = $props();

  console.log(data.speakers);
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<AbstractBanner />
<Speakers speakers={data.speakers} animation={false} />
<Tickets heading="Build the future of scalable, resilient systems" />
<Footer />

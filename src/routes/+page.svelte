<script lang="ts">
  import Introduction from '$content/introduction.md';
  import LastYear from '$content/last-year.md';
  import Tickets from '$components/tickets.svelte';
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<section class="container max-w-3xl space-y-16">
  <Introduction class="prose prose-invert" />
  <Tickets />
  <LastYear class="prose prose-invert" />
</section>

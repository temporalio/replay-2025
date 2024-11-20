<script lang="ts">
  import Introduction from '$content/introduction.md';
  import LastYear from '$content/last-year.md';
  import Tickets from '$components/tickets.svelte';
  import CallForProposals from '$components/call-for-proposals.svelte';
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<section class="bg-pear-300 container max-w-3xl space-y-16 py-16">
  <Introduction class="prose" />
  <div class="flex flex-col gap-4 md:flex-row">
    <Tickets />
    <CallForProposals />
  </div>
  <LastYear class="prose" />
</section>

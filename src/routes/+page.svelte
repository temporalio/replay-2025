<script lang="ts">
  import logo from '$icons/temporal-logo.svg';
  import Introduction from '$content/introduction.md';
  import LastYear from '$content/last-year.md';
  import Tickets from '$components/tickets.svelte';
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<div class="container my-10 flex flex-col items-center gap-4 font-display text-4xl uppercase">
  <img src={logo} alt="Temporal logo" class="w-24" />
  <h1 class="text-6xl lg:text-9xl">Replay</h1>
  <p>March 3–5, 2025</p>
  <p>London, UK</p>
</div>

<section class="container max-w-3xl space-y-16">
  <Introduction class="prose prose-invert" />
  <Tickets />
  <LastYear class="prose prose-invert" />
</section>

<script lang="ts">
  import Introduction from '$content/introduction.md';
  import LastYear from '$content/last-year.md';

  import links from '$content/links.yaml';
  import { Button } from '$components/button';
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<section class="container max-w-5xl space-y-8 bg-green py-12 prose-h3:mb-0">
  <Introduction class="prose" />
  <div class="flex flex-col gap-4 md:flex-row">
    <Button intent="tertiary" href={links.tickets} label="Buy Tickets" />
    <Button intent="tertiary" href={links.cfp} label="Call for Proposals" />
  </div>
  <LastYear class="prose" />
</section>

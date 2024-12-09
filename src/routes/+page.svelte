<script lang="ts">
  import { Hero } from '$components/hero';
  import { Navigation } from '$components/navigation';
  import Quote from '$components/quote.svelte';
  import { Speaker } from '$components/speaker';
  import Benefits from '$components/benefits.svelte';
  import Sponsors from '$components/sponsors/sponsors.svelte';
  import Location from '$components/location.svelte';
  import Tickets from '$components/tickets.svelte';
  import Footer from '$components/footer.svelte';
  import PreviousYear from '$components/previous-year.svelte';
  import Agenda from '$components/agenda.svelte';
  import Buildings from '$components/buildings.svelte';
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<Navigation />
<Hero />

<Tickets heading="Break Free from the Status Quo" />
<Agenda />

<section class="bg-grid">
  <div class="section">
    <h2 class="title-medium">Speakers</h2>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8 xl:flex-row xl:flex-wrap xl:justify-between">
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
          type="keynote"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
          type="keynote"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
          type="keynote"
        />
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
        />
      </div>
    </div>
  </div>
</section>

<div class="section space-y-20 py-32">
  <Quote
    content="A lot of great collective minds coming in together to solve complex distributed problems."
    source="Salesforce"
  />
  <PreviousYear />
  <Benefits />
</div>

<Sponsors />
<Buildings />
<Location />
<Tickets heading="Build the future of scalable, resilient systems" />
<Footer />

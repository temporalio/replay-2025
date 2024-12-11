<script lang="ts">
  import { Hero } from '$components/hero';
  import { Navigation } from '$components/navigation';
  import { Speakers } from '$components/speaker';
  import Agenda from '$components/agenda.svelte';
  import Benefits from '$components/benefits.svelte';
  import Buildings from '$components/buildings.svelte';
  import Footer from '$components/footer.svelte';
  import Location from '$components/location.svelte';
  import PreviousYear from '$components/previous-year.svelte';
  import Quote from '$components/quote.svelte';
  import Sponsors from '$components/sponsors/sponsors.svelte';
  import Tickets from '$components/tickets.svelte';
  import About from '$components/about.svelte';
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<Navigation />
<Hero />
<Tickets heading="Break Free from the Status Quo" />
<About />
<Agenda />
<Speakers />

<div class="section grid grid-cols-1 items-center gap-20 py-32 xl:grid-cols-2 xl:gap-8">
  <Quote
    content="A lot of great collective minds coming in together to solve complex distributed problems."
    source="Salesforce"
  />
  <PreviousYear />
  <Benefits class="xl:col-span-2" />
</div>

<Sponsors />
<Buildings />
<Location />
<Tickets heading="Build the future of scalable, resilient systems" />
<Footer />

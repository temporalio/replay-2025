<script lang="ts">
  import About from '$components/about.svelte';
  import Agenda from '$components/agenda.svelte';
  import Banner from '$components/banner/banner.svelte';
  import Benefits from '$components/benefits.svelte';
  import { Hero } from '$components/hero';
  import Location from '$components/location.svelte';
  import PreviousYear from '$components/previous-year.svelte';
  import Speakers from '$components/speaker/speakers.svelte';
  import Sponsors from '$components/sponsors/sponsors.svelte';
  import Tickets from '$components/tickets.svelte';
  import Quote from '$components/quote.svelte';

  import type { Entry } from 'contentful';
  import type { SpeakerSkeleton } from '$lib/contentful';

  const { data } = $props();
  const { elite, premier, impact } = data;
</script>

<svelte:head>
  <title>Replay 2025 — March 3–5 — London, UK</title>
</svelte:head>

<Hero />
<Tickets heading="Break Free from the Status Quo" />
<About />
<Agenda />
<Banner />
<Speakers
  speakers={data.speakers as Entry<SpeakerSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]}
/>

<div class="bg-lines bg-no-repeat 3xl:bg-none">
  <div
    class="section grid grid-cols-1 items-center gap-20 bg-no-repeat py-32 xl:grid-cols-2 xl:gap-16"
  >
    <Quote
      content="A lot of great collective minds coming in together to solve complex distributed problems."
      source="Salesforce"
    />
    <PreviousYear />
    <Benefits class="xl:col-span-2" />
  </div>
</div>

<Sponsors {elite} {premier} {impact} />
<Location />
<Tickets heading="Build the future of scalable, resilient systems" />

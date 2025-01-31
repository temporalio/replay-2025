<script lang="ts">
  import Breadcrumb from '$components/breadcrumb.svelte';
  import { formatSpeakerDate } from '$lib/utilities/format-date.js';
  import type { Entry } from 'contentful';
  import type { SessionSkeleton } from '$lib/contentful/session.js';

  type TalkWithDate = Entry<SessionSkeleton> & { date: string };

  const { data } = $props();
  const { speaker, hasTalks, biography, portrait } = data;
  const talks: TalkWithDate[] = data.talks as TalkWithDate[];
</script>

<svelte:head>
  <title>{speaker.fullName}</title>
  <meta name="description" content={speaker.bio} />
  <meta
    property="og:title"
    content="{speaker.fullName}, {speaker.companyName}: Replay Conference"
  />
  <meta property="og:description" content={speaker.bio} />
  <meta property="og:site_name" content="Replay Conference" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
</svelte:head>

<section class="flex w-full flex-col justify-start gap-12 bg-grid py-24">
  <div class="container space-y-8">
    <div class="hover:underline">
      <Breadcrumb text="Return to speakers" href="/speakers" />
    </div>
    <h1 class="font-afacad text-5xl uppercase text-white">{speaker.fullName}</h1>
    <div class="grid grid-cols-1 gap-6 border border-grey bg-black p-6 lg:grid-cols-[auto_280px]">
      <div class="space-y-4">
        <h3 class="font-afacad text-xl uppercase text-white">{speaker.jobTitle}</h3>
        <div class="prose prose-invert text-lilac">{@html biography}</div>
        {#if hasTalks}
          <div class="space-y-6">
            <h3 class="font-afacad text-xl uppercase text-white">Talks</h3>
            {#each talks as talk}
              <div class="flex flex-col gap-4">
                <a
                  href="/schedule/{talk.fields.slug}"
                  class="font-sans text-lg font-bold text-white">{talk.fields.title}</a
                >
              </div>
            {/each}
            {#each talks as talk}
              <p class="font-sans text-lg text-lilac">{@html talk.date}</p>
            {/each}
          </div>
        {/if}
      </div>

      <div class="aspect-square min-w-[280px]">
        <img src={portrait} alt={speaker.fullName} class="max-w-full" />
      </div>
    </div>
  </div>
</section>

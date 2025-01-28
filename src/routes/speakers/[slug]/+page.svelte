<script lang="ts">
  import Breadcrumb from '$components/breadcrumb.svelte';
  import Footer from '$components/footer.svelte';

  const { data } = $props();
  const { speaker, biography, portrait } = data;
</script>

<svelte:head>
  <title>Frequently Asked Questions: Replay Conference</title>
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
    <Breadcrumb text="Return to speakers" href="/speakers" />
    <h1 class="font-afacad text-5xl uppercase text-white">{speaker.fullName}</h1>

    <div class="grid grid-cols-1 gap-6 border border-grey bg-black p-6 lg:grid-cols-[auto_280px]">
      <div class="space-y-4">
        <h3 class="font-afacad text-xl uppercase text-white">{speaker.jobTitle}</h3>
        <div class="prose prose-invert text-lilac">{@html biography}</div>

        <div class="space-y-6">
          <h3 class="font-afacad text-xl uppercase text-white">Talks</h3>
          {#each data.talks as talk}
            <div class="flex flex-col gap-4">
              <a href="/schedule/{talk.fields.slug}" class="font-sans text-lg font-bold text-white"
                >{talk.fields.title}</a
              >
            </div>
          {/each}
        </div>
      </div>

      <div class="aspect-square min-w-[280px] bg-grey">
        <img src={portrait} alt={speaker.fullName} class="max-w-full" />
      </div>
    </div>
  </div>
</section>

<Footer />
<!-- TO DO: Need to add the talks for the individual speaker -->

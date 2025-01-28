<script lang="ts">
  import Breadcrumb from '$components/breadcrumb.svelte';
  import Footer from '$components/footer.svelte';

  const { data } = $props();
  const { speaker, biography, portrait } = data;
</script>

<section class="flex w-full flex-col justify-start gap-12 bg-grid py-24">
  <div class="container space-y-8">
    <Breadcrumb text="Return to speakers" href="/speakers" />
    <h1 class="font-afacad text-5xl uppercase text-white">{speaker.fullName}</h1>

    <div class="grid grid-cols-1 gap-6 border border-grey bg-black p-6 lg:grid-cols-[auto_280px]">
      <div class="space-y-4">
        <h3 class="font-afacad text-xl uppercase text-white">{speaker.jobTitle}</h3>
        <div class="prose prose-invert text-lilac">{@html biography}</div>
      </div>
      <img src={portrait} alt={speaker.fullName} class="block max-w-full" />
    </div>
  </div>
</section>

<Footer />
<!-- TO DO: Need to add the talks for the individual speaker -->

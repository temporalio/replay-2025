<script lang="ts">
  import AbstractBanner from '$components/abstract-banner.svelte';
  import FaqItem from '$components/faq/faq-item.svelte';

  const { data } = $props();
  const { title, categories } = data;
</script>

<svelte:head>
  <title>Frequently Asked Questions: Replay Conference</title>
  <meta
    name="description"
    content="Frequently Asked Questions for Replay, an annual conference hosted by Temporal dedicated to the platforms, practices, and trends in backend software engineering."
  />
  <meta property="og:title" content="FAQ: Replay Conference" />
  <meta
    property="og:description"
    content="Frequently Asked Questions for Replay, an annual conference hosted by Temporal dedicated to the platforms, practices, and trends in backend software engineering."
  />
  <meta property="og:site_name" content="FAQ: Replay Conference" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://replay.temporal.io/faq" />
</svelte:head>

<AbstractBanner />

<section class="relative flex flex-col items-center bg-grid py-36">
  <div class="container">
    <h2 class="hero-subtitle uppercase tracking-wide text-white">{title}</h2>

    {#each categories as { title, questions }}
      <section>
        <h3 id="title" class="font-josefin mb-8 text-2xl uppercase text-teal">
          {title}
        </h3>

        {#each questions as question}
          <FaqItem question={question.question} answer={question.answer} />
        {/each}
      </section>
    {/each}
  </div>
</section>

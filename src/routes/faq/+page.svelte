<script>
  import Faq from '$components/faq/faq.svelte';
  const { data } = $props();
  import AbstractBanner from '$components/abstract-banner.svelte';
  const [questions] = data.FAQ;
  const { generalQuestions, ticketingQuestions, miscQuestions } = questions.fields;
</script>

<svelte:head>
  <title>Frequently Asked Questions: Replay Conference</title>
  <meta
    name="description"
    content="Faq for Replay, an annual conference hosted by Temporal dedicated to the platforms, practices, and trends in backend software engineering."
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
  <meta property="og:image" content="/src/assets/og.png" />
</svelte:head>

<AbstractBanner />
<section class="relative flex flex-col items-center bg-grid">
  <div class="mt-36 max-w-[940px]">
    <div class="hero-subtitle flex flex-col items-start p-4 uppercase tracking-wide text-white">
      Frequently Asked Questions
    </div>
    {#if generalQuestions}
      <Faq title="General Questions" content={generalQuestions} />
    {/if}

    {#if ticketingQuestions}
      <Faq title="Ticketing Questions" content={ticketingQuestions} />
    {/if}

    {#if miscQuestions}
      <Faq title="Misc Questions" content={miscQuestions} />
    {/if}
  </div>
</section>

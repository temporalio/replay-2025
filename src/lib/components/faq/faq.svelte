<script lang="ts">
  import type { FAQ } from '$lib/contentful/models/faq';

  export let content: FAQ;
  const { title, questionsAndAnswers } = content;
</script>

<div>
  <h2 class="mb-12 text-left font-serif text-4xl">
    {title}
  </h2>
  <div class="space-y-12">
    {#each questionsAndAnswers as { question, answer }}
      <article>
        <h2 class="font-label text-xl uppercase">{question}</h2>
        {@html answer}
      </article>
    {/each}
  </div>
</div>

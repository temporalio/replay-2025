<script lang="ts">
  import type { Questions } from '$lib/contentful';
  import type { FAQs } from '$lib/contentful';
  export let content: FAQs;
  $: ({ title, entityId, questionsAndAnswers } = content);
</script>

<div>
  <h2 class="mb-12 text-left font-serif text-4xl">
    {title}
  </h2>
  <div class="space-y-12">
    {#each questionsAndAnswers as { question, answer, entityId }}
      <article>
        <h2 class="font-label text-xl uppercase">{question}</h2>
        {@html answer}
      </article>
    {/each}
  </div>
</div>

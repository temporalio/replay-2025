<script lang="ts">
  import type { FAQ, Questions } from '$lib/contentful/models/faq';
  export let content: Questions[];
  import FaqItem from './faq-item.svelte';
  export let title: string;

  $: ({ entityId, questionsAndAnswers } = content);
</script>

<div class="flex flex-col items-center gap-8">
  <div {entityId} fieldId="title" variant="display-68">{title}</div>
  <div class="w-full">
    {#each questionsAndAnswers}
      <FaqItem content={questionsAndAnswers} />
    {/each}
  </div>
</div>

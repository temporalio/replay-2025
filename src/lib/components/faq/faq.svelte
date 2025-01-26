<script lang="ts">
  import FaqItem from '$components/faq/faq-item.svelte';
  export let content: Array<{ fields: { question: string; answer: string } }>;
  export let title: string;
</script>

<div class="flex flex-col items-start gap-8 p-4">
  <div id="title" class="font-afacab text-start text-2xl uppercase text-teal">{title}</div>
  <div class="w-full">
    {#each content as { fields: { question, answer } }}
      <FaqItem {question} {answer} />
    {/each}
  </div>
</div>

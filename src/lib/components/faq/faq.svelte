<script lang="ts">
  import FaqItem from '$components/faq/faq-item.svelte';
  export let content: Array<{ fields: { question: string; answer: string } }>;
  export let title: string;
</script>

<div class="flex flex-col items-center gap-8 p-4">
  <div id="title" class="font-afacab text-2xl font-bold uppercase text-teal">{title}</div>
  <div class="w-full">
    {#each content as { fields: { question, answer } }}
      <FaqItem {question} {answer} />
    {/each}
  </div>
</div>

<script lang="ts">
  import type { FAQs, QuestionAndAnswer } from '$lib/contentful/models/faq';
  import type { Entry } from 'contentful';

  export let content: Entry<QuestionAndAnswer>[]; // An array of FAQ entries
  export let title: string;
  console.log('FAQs:', content);
</script>

<div class="flex flex-col items-center gap-8">
  <div id="title" class="text-2xl font-bold">{title}</div>
  <div class="w-full">
    {#each content as { fields: { question, answer } }}
      <div class="border-blue-gray-300 flex w-full flex-col border-b py-4">
        <p class="font-semibold">{question}</p>
        <p class="text-gray-600">{answer}</p>
      </div>
    {/each}
  </div>
</div>

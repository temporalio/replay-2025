<script lang="ts">
  import type { FAQ, Questions } from '$lib/contentful/models/faq';
  export let content: Questions;
  console.log('AHHHHH', content);
  $: ({ entityId, question, answer } = content.fields);
</script>

<div class="border-blue-gray-300 flex w-full flex-col border-b py-4">
  <p>{question}</p>
  <p>{answer}</p>
</div>

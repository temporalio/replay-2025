<script lang="ts">
  import type { Questions } from '$lib/contentful';
  import type { FAQ, QuestionAndAnswer } from './faq-types';
  export let content: FAQ;
  console.log('cxontetn', content);
  $: ({ title, entityId, questionsAndAnswers } = content);
</script>

<Grid as="div" layout="columns" {background}>
  <Box as="div" class="flex flex-col items-center gap-8">
    <Text {entityId} fieldId="title" variant="display-68">{title}</Text>
    <div class="w-full">
      {#each questionsAndAnswers as { question, answer, entityId }}
        <FaqItem {question} {answer} {entityId} />
      {/each}
    </div>
  </Box>
</Grid>

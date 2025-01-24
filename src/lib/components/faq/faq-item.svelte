<script lang="ts">
  import { slide } from 'svelte/transition';
  import Icon from '../icon/icon.svelte';
  import Text from '../text/text.svelte';
  import RichText from '../rich-text/rich-text.svelte';

  export let question: string;
  export let answer: string | undefined = undefined;
  export let entityId: string | undefined = undefined;

  let expanded = false;
</script>

<div class="border-blue-gray-300 flex w-full flex-col border-b py-4">
  <button class="flex w-full justify-between text-left" on:click={() => (expanded = !expanded)}>
    <Text {entityId} fieldId="question" as="p" variant="body-24">{question}</Text>
    <Icon name={expanded ? 'hyphen' : 'add'} />
  </button>
  {#if expanded}
    <div transition:slide class="py-4">
      <RichText background="none" text={answer} {entityId} fieldId="answer">
        <slot />
      </RichText>
    </div>
  {/if}
</div>

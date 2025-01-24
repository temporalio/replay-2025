<script lang="ts">
  import { slide } from 'svelte/transition';

  export let question: string;
  export let answer: string;

  let expanded = false;
</script>

<div class="border-blue-gray-300 w-full border-b bg-black p-4 py-4">
  <button class="w-full" on:click={() => (expanded = !expanded)}>
    <div class="title-and-icon flex w-full items-center justify-between">
      <p class="text-start font-sans">{question}</p>
      <div>
        <enhanced:img src="$assets/icons/arrow.svg" alt="arrow" />
      </div>
    </div>
  </button>
  {#if expanded}
    <div transition:slide class="py-4">
      <p class="text-gray-600">{answer}</p>
    </div>
  {/if}
</div>

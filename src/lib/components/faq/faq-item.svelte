<script lang="ts">
  import { slide } from 'svelte/transition';

  export let question: string;
  export let answer: string;
  let chevronDown = '/src/assets/icons/chevron-down.svg';
  let chevronUp = '/src/assets/icons/chevron-up.svg';
  let expanded = false;
</script>

<div class="w-full border-b border-slate-700 bg-black p-4 py-4">
  <button class="w-full" on:click={() => (expanded = !expanded)}>
    <div class="title-and-icon flex w-full items-center justify-between">
      <p class="font-inter text-start">{question}</p>
      <div>
        {#if expanded}
          <enhanced:img src="$assets/icons/chevron-down.svg" alt="arrow" />
        {:else}
          <enhanced:img src="$assets/icons/chevron-up.svg" alt="arrow" />
        {/if}
      </div>
    </div>
  </button>
  {#if expanded}
    <div transition:slide class="py-4">
      <p class="font-inter text-lilac">{@html answer}</p>
    </div>
  {/if}
</div>

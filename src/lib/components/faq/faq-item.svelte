<script lang="ts">
  import { slide } from 'svelte/transition';

  const { question, answer }: { question: string; answer: string } = $props();
  let expanded = $state(false);
</script>

<div class="w-full space-y-4 border-b border-slate-700 pb-4 last:border-b-0">
  <button class="w-full" onclick={() => (expanded = !expanded)}>
    <div class="title-and-icon flex w-full items-center justify-between">
      <p class="font-inter prose prose-invert text-start">{@html question}</p>
      <div>
        <enhanced:img
          src="$assets/icons/chevron-up.svg"
          alt="arrow"
          class="transition-transform"
          class:rotate-180={expanded}
        />
      </div>
    </div>
  </button>
  {#if expanded}
    <div transition:slide class="font-inter prose prose-invert text-lilac">
      {@html answer}
    </div>
  {/if}
</div>

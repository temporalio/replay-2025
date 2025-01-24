<script lang="ts">
  import type { Questions } from '$lib/contentful';

  export let content: { questions: Questions[]; title: string };
  const { questions, title } = content;
</script>

<div>
  <h2 class="mb-12 text-left font-serif text-4xl">
    {title}
  </h2>
  <div class="space-y-12">
    {#each questions as { question, answer }}
      <article>
        <h2 class="font-label text-xl uppercase">{question}</h2>
        {@html answer}
      </article>
    {/each}
  </div>
</div>

<!-- To do: I'm struggling with the typing here. Need to get this fixed to make the FAQ's work.  -->

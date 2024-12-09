<script lang="ts">
  import type { Snippet } from 'svelte';

  const { title, children }: { title: string; children?: Snippet } = $props();
</script>

<section>
  <div class="mb-8 flex flex-wrap gap-8">
    {@render children?.()}
  </div>
  <h3 class="border-t border-t-green-dark pt-4 font-afacad uppercase text-green-dark">{title}</h3>
</section>

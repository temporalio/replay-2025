<script lang="ts">
  import { twMerge as merge } from 'tailwind-merge';

  const {
    content,
    source,
    class: className,
  }: { content: string; source: string; class?: string } = $props();
</script>

<section class={merge(className)}>
  <div class="mx-auto max-w-3xl space-y-4">
    <blockquote
      class="font-afacad text-4xl uppercase before:mb-4 before:block before:content-[url('$assets/icons/quote.svg')]"
    >
      {content}
    </blockquote>
    <p class="text-xl font-semibold">{source}</p>
  </div>
</section>

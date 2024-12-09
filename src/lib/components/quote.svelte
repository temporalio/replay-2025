<script lang="ts">
  const { content, source }: { content: string; source: string } = $props();
</script>

<section>
  <div class="mx-auto max-w-3xl space-y-4">
    <blockquote
      class="font-afacad text-4xl uppercase before:mb-4 before:block before:content-[url('$assets/icons/quote.svg')]"
    >
      {content}
    </blockquote>
    <p class="text-xl font-semibold">{source}</p>
  </div>
</section>

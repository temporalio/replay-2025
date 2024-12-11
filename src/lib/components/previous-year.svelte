<script lang="ts">
  import { twMerge as merge } from 'tailwind-merge';

  import links from '$content/links.yaml';
  import highlights from '$assets/highlights.png';

  const { class: className }: { class?: string } = $props();
</script>

<section class={merge(className)}>
  <div class="flex flex-col items-center">
    <img src={highlights} alt="Highlights" class="block w-full md:w-fit" />
    <a
      href={links.replay2024videos}
      target="_blank"
      class="flex gap-2 bg-blue-to-mint px-8 py-4 font-sans text-lg font-bold uppercase text-black hover:cursor-pointer hover:text-pink-dark"
    >
      <span>Play 2024 Reel</span>
      <span>▶️</span>
    </a>
  </div>
</section>

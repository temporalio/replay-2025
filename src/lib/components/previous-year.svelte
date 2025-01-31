<script lang="ts">
  import { twMerge as merge } from 'tailwind-merge';

  import links from '$content/links.yaml';
  import play from '$assets/icons/play.svg';

  const { class: className }: { class?: string } = $props();
</script>

<section class={merge(className)}>
  <div class="flex flex-col items-center">
    <enhanced:img src="$assets/highlights.png" alt="Highlights" class="block" />
    <a
      href={links.replay2024videos}
      target="_blank"
      class="flex gap-2 bg-blue-to-mint px-8 py-4 font-sans text-lg font-bold uppercase text-black hover:cursor-pointer hover:text-pink-dark hover:ring-4 hover:ring-pink"
    >
      <span class="block">Play 2024 Reel</span>
      <enhanced:img src="$assets/icons/play.svg" class="block" alt="Play" />
    </a>
  </div>
</section>

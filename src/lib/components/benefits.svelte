<script lang="ts">
  import { twMerge as merge } from 'tailwind-merge';

  const { class: className }: { class?: string } = $props();
</script>

<section class={merge(className)}>
  <ul class="flex flex-col lg:flex-row">
    <li
      class="flex flex-col items-center gap-4 border-b border-pink px-8 py-16 text-center first:pt-0 last:border-b-0 last:pb-0 lg:border-b-0 lg:border-r lg:first:pt-16 lg:last:border-r-0"
    >
      <enhanced:img src="$assets/icons/ask-the-experts.svg" alt="Ask the Experts" />
      <h3 class="uppercase title-small">Ask the Experts</h3>
      <p>Get one-on-one insights into best practices and solutions.</p>
    </li>
    <li
      class="flex flex-col items-center gap-4 border-b border-pink px-8 py-16 text-center first:pt-0 last:border-b-0 last:pb-0 lg:border-b-0 lg:border-r lg:first:pt-16 lg:last:border-r-0"
    >
      <enhanced:img src="$assets/icons/network.svg" alt="Network" />
      <h3 class="uppercase title-small">Network</h3>
      <p>Connect with the community and learn from the best.</p>
    </li>
    <li
      class="flex flex-col items-center gap-4 border-b border-pink px-8 py-16 text-center first:pt-0 last:border-b-0 last:pb-0 lg:border-b-0 lg:border-r lg:first:pt-16 lg:last:border-r-0"
    >
      <enhanced:img src="$assets/icons/future-proof.svg" alt="Future-Proof" />
      <h3 class="uppercase title-small">Future-Proof</h3>
      <p>Stay ahead of the curve with the latest in tech.</p>
    </li>
  </ul>
</section>

<script lang="ts" module>
  import AbstractBanner from '$components/abstract-banner.svelte';
</script>

<AbstractBanner />
<div class={'mt-24 flex flex-col justify-start gap-8 p-6'}>
  <h1 class={'text-2xl font-bold uppercase text-white'}>Schedule</h1>
  <div>
    <p class="uppercase text-teal">Day 1: Mar 3, 2025</p>
    <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black px-6"></div>
  </div>
  <div>
    <p class="uppercase text-teal">Day 2: Mar 4, 2025</p>
    <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black px-6"></div>
  </div>
  <div>
    <p class="uppercase text-teal">Day 3: Mar 5, 2025</p>
    <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black px-6"></div>
  </div>
</div>

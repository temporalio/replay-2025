<script lang="ts">
  import type { Slot } from '$lib/contentful/models/time-slot';
  import { formatTime } from '$lib/utilities/format-time';
  const { startTime, endTime, talk }: Slot = $props();

  const talkOne = talk?.[0];
  const talkTwo = talk?.[1] ?? null;
  const start = formatTime(startTime);
  const end = formatTime(endTime);

  console.log('Talk?', talkOne);
</script>

<div class=" flex w-full items-center border-b border-grey py-6">
  <div class="flex flex-col items-start pr-10 text-green md:block">
    <p class="text-nowrap">{start} -</p>
    <p>{end}</p>
  </div>

  <div class="flex">
    <a href="/schedule/{talkOne?.fields.slug}" class="text-white"
      >{talkOne?.fields.title} Lorem ipsum dolor sit amet</a
    >
  </div>
  <div class="flex">
    >
    {#if talkOne}
      <a
        href="/schedule/{talkOne?.fields.slug}"
        class="hidden border-l border-grey text-white lg:block"
        >{talkOne?.fields.title} talk two Lorem ipsum dolor sit amet</a
      >
    {/if}
  </div>
</div>

{#if talkOne}
  <div class=" flex w-full items-center border-b border-l border-grey py-6 lg:hidden">
    <div>
      <a href="/schedule/{talkOne?.fields.slug}" class="text-white"
        >{talkOne?.fields.title} talk two Lorem ipsum dolor sit amet</a
      >
    </div>
  </div>
{/if}

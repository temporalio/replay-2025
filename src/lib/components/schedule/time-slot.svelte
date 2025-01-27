<script lang="ts">
  import type { TimeSlot } from '$lib/contentful/time-slot';
  import { formatTime } from '$lib/utilities/format-time';

  export let timeSlot: TimeSlot<'WITHOUT_UNRESOLVABLE_LINKS', never>;

  const { startTime, endTime, talk } = timeSlot.fields;

  const talkOne = talk?.[0] ?? null;
  const talkTwo = talk?.[1] ?? null;
  const start = formatTime(startTime);
  const end = formatTime(endTime);
</script>

<div class="flex w-full items-center border-b border-grey">
  <div class="flex flex-col items-start pr-10 text-green md:block">
    <p class="text-nowrap">{start} -</p>
    <p>{end}</p>
  </div>

  <div class="flex">
    {#if talkOne}
      <a href="/schedule/{talkOne.fields.slug}" class="text-white">
        {talkOne.fields.title}
      </a>
    {/if}
  </div>

  {#if talkTwo}
    <div class="flex">
      <a
        href="/schedule/{talkTwo.fields.slug}"
        class="hidden border-l border-grey text-white lg:block"
      >
        {talkTwo.fields.title}
      </a>
    </div>
  {/if}
</div>

{#if talkTwo}
  <div class="flex w-full items-center border-b border-l border-grey py-6 lg:hidden">
    <div>
      <a href="/schedule/{talkTwo.fields.slug}" class="text-white">
        {talkTwo.fields.title}
      </a>
    </div>
  </div>
{/if}

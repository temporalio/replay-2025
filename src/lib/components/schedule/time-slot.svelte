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

<div
  class="grid w-full grid-cols-[8rem_1fr_1fr] border-b border-grey text-lg text-white last:border-b-0"
>
  <div class="font-inter p-4 text-left text-base text-green">
    <p>{start} -</p>
    <p>{end}</p>
  </div>
  {#if talkOne}
    <div class="font-inter flex items-center text-base">
      <a href="/schedule/{talkOne.fields.slug}" class="block">
        {talkOne.fields.title}
      </a>
    </div>
  {/if}

  {#if talkTwo}
    <div class="flex items-center border-l border-grey p-4">
      <a href="/schedule/{talkTwo.fields.slug}" class="block font-bold">
        {talkTwo.fields.title}
      </a>
    </div>
  {/if}
</div>

{#if talkTwo}
  <div class="grid w-full grid-cols-[8rem_1fr_1fr] border-b border-grey text-lg text-white">
    <p>{start} -</p>
    <p>{end}</p>
  </div>
  {#if talkTwo}
    <div class="flex items-center p-4">
      <a href="/schedule/{talkTwo.fields.slug}" class="block font-bold">
        {talkTwo.fields.title}
      </a>
    </div>
  {/if}
{/if}

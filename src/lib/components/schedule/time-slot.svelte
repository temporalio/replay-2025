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
  class="font-inter grid w-full grid-cols-[6rem_1fr] items-center border-b border-grey text-lg text-white
         last:border-b-0 md:grid-cols-[8rem_1fr_1fr]"
>
  <div class="p-4 text-left text-base text-green">
    <p>{start} -</p>
    <p>{end}</p>
  </div>
  {#if talkOne}
    <div class="items-center p-4">
      <a href="/schedule/{talkOne.fields.slug}">
        {talkOne.fields.title}
      </a>
    </div>
  {/if}

  {#if talkTwo}
    <div class="hidden items-center border-l border-grey p-4 md:block">
      <a href="/schedule/{talkTwo.fields.slug}">
        {talkTwo.fields.title}
      </a>
    </div>
  {/if}
</div>

{#if talkTwo}
  <div
    class="font-inter grid w-full grid-cols-[6rem_1fr] items-start border-b border-grey text-lg text-white
           last:border-b-0 md:hidden"
  >
    <div class="p-4 text-left text-base text-green">
      <p>{start} -</p>
      <p>{end}</p>
    </div>
    <div class="items-center p-4">
      <a href="/schedule/{talkTwo.fields.slug}">
        {talkTwo.fields.title}
      </a>
    </div>
  </div>
{/if}

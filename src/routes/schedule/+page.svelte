<script lang="ts" module>
  import AbstractBanner from '$components/abstract-banner.svelte';
  import Schedule from '$components/schedule/schedule.svelte';
  import type { TimeSlot } from '$lib/contentful';
</script>

<script lang="ts">
  const { data } = $props();

  const dayOneSlots = data.timeSlotsByDay.day1;
  const dayTwoSlots = data.timeSlotsByDay.day2;
  const dayThreeSlots = data.timeSlotsByDay.day3;
</script>

<AbstractBanner />
<section class="relative flex flex-col items-center bg-grid">
  <section class="section flex flex-col justify-start gap-8 p-6 pb-16 pt-36">
    <h1 class="hero-subtitle text-4xl uppercase text-white lg:text-5xl">Schedule</h1>
    <Schedule
      title="Day 1: Mar 3, 2025"
      slots={dayOneSlots as TimeSlot<'WITHOUT_UNRESOLVABLE_LINKS', never>[]}
    />
    <Schedule
      title="Day 2: Mar 4, 2025"
      slots={dayTwoSlots as TimeSlot<'WITHOUT_UNRESOLVABLE_LINKS', never>[]}
    />
    <Schedule
      title="Day 3: Mar 5, 2025"
      slots={dayThreeSlots as TimeSlot<'WITHOUT_UNRESOLVABLE_LINKS', never>[]}
    />
  </section>
</section>

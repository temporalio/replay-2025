<script lang="ts" module>
  import AbstractBanner from '$components/abstract-banner.svelte';
  import Schedule from '$components/schedule/schedule.svelte';
</script>

<script lang="ts">
  const { data } = $props();

  const dayOneSlots = data.timeSlotsByDay.day1;
  const dayTwoSlots = data.timeSlotsByDay.day2;
  const dayThreeSlots = data.timeSlotsByDay.day3;
</script>

<!-- TO DO: figure out why "Talk" is mad about the type stuff -->
<!-- TO DO: Fix date padding/margin stuff -->

<AbstractBanner />
<section class="relative flex flex-col items-center bg-grid">
  <section class="section flex flex-col justify-start gap-8 p-6 pb-16 pt-36">
    <h1 class="hero-subtitle text-4xl uppercase text-white lg:text-5xl">Schedule</h1>

    <Schedule title="Day 1: Mar 3, 2025" slots={dayOneSlots} />
    <Schedule title="Day 2: Mar 4, 2025" slots={dayTwoSlots} />
    <Schedule title="Day 3: Mar 5, 2025" slots={dayThreeSlots} />
  </section>
</section>

<script lang="ts" module>
  import AbstractBanner from '$components/abstract-banner.svelte';
  import TimeSlot from '$components/schedule/time-slot.svelte';
</script>

<script lang="ts">
  const { data } = $props();
  console.log(data);

  const dayOneSlots = data.timeSlotsByDay.day1;
  const dayTwoSlots = data.timeSlotsByDay.day2;
  const dayThreeSlots = data.timeSlotsByDay.day3;
</script>

<AbstractBanner />
<section class="relative flex flex-col items-center bg-grid">
  <section class={'section flex flex-col justify-start gap-8 p-6 pb-16 pt-36'}>
    <h1 class={'hero-subtitle text-4xl uppercase text-white lg:text-5xl'}>Schedule</h1>
    <div>
      <p class="text-2xl uppercase text-teal">Day 1: Mar 3, 2025</p>
      <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black px-6">
        {#each dayOneSlots as timeslot}
          <TimeSlot
            startTime={timeslot.fields.startTime}
            endTime={timeslot.fields.endTime}
            talk={timeslot.fields.talk}
          />
        {/each}
      </div>
    </div>
    <div>
      <p class="text-2xl uppercase text-teal">Day 2: Mar 4, 2025</p>
      <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black px-6">
        {#each dayTwoSlots as timeslot}
          <TimeSlot
            startTime={timeslot.fields.startTime}
            endTime={timeslot.fields.endTime}
            talk={timeslot.fields.talk}
          />
        {/each}
      </div>
    </div>
    <div>
      <p class="text-2xl uppercase text-teal">Day 3: Mar 5, 2025</p>
      <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black px-6">
        {#each dayThreeSlots as timeslot}
          <TimeSlot
            startTime={timeslot.fields.startTime}
            endTime={timeslot.fields.endTime}
            talk={timeslot.fields.talk}
          />
        {/each}
      </div>
    </div>
  </section>
</section>

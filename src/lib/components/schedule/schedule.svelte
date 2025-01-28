<script lang="ts">
  import type { TimeSlot } from '$lib/contentful/time-slot';
  import Slot from './time-slot.svelte';

  export let slots: TimeSlot<'WITHOUT_UNRESOLVABLE_LINKS', never>[] = [];
  export let title: string = 'Day';
</script>

<div>
  <p class="py-8 text-2xl uppercase text-teal">{title}</p>
  <div class="flex w-full flex-col items-center border border-grey bg-black px-6">
    {#each slots as slot}
      <Slot timeSlot={slot} />
    {/each}
  </div>
</div>

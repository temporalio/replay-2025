<script lang="ts" module>
  export type SpeakerProps = {
      fullName: string;
  image: Image;
  jobTitle: EntryFieldTypes.Symbol;
  companyName: EntryFieldTypes.Symbol;
  keynote: EntryFieldTypes.Boolean;
    time: string;
    title: string;
    description: string;
    children?: Snippet;
    class?: string;
  };
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import Breadcrumb from '$components/breadcrumb.svelte';

  const { time, title, description, children, class: className }: SpeakerProps = $props();
</script>

<div class="mt-24 flex flex-col justify-start px-6">
  <Breadcrumb text="Return to schedule" href="/schedule" />
  <h1 class="text-2xl font-bold text-white">{title}</h1>
  <p class="text-green">{time}</p>
  {#if description}
    <div class="border-grey flex w-full flex-col items-center gap-4 border bg-black p-6">
      <p class="font-lilac prose">{description}</p>
    </div>
  {/if}
</div>

<script lang="ts" module>
  import { twMerge as merge } from 'tailwind-merge';
  import { speaker, portrait, speakerName, type SpeakerProps } from '$components/speaker/variants';
  import Stonehenge from '$components/stonehenge.svelte';
</script>

<script lang="ts">
  import Breadcrumb from '$components/breadcrumb.svelte';

  const { image, bio, jobTitle }: SpeakerProps = $props();
</script>

<Stonehenge />
<div class={merge(speaker({ type }), 'mt-24 flex flex-col justify-start px-6')}>
  <Breadcrumb text="Return to speakers" href="/speakers" />
  <h1 class={merge(speakerName({ type }), 'text-2xl font-bold text-white')}>{name}</h1>
  <div class="border-grey flex w-full flex-col items-center gap-4 border bg-black p-6">
    <div>
      <p class="text-white">{jobTitle}</p>
      {#if bio}
        <p class="font-lilac prose">{bio}</p>
      {/if}
      <div
        class={portrait({ type })}
        style="background-image: url({image}?w=720&h=648&fm=webp);"
      ></div>
    </div>
  </div>
</div>

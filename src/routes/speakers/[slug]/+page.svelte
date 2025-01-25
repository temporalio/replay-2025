<script lang="ts" module>
  import { type SpeakerProps } from '$components/speaker/variants';
  import AbstractBanner from '$components/abstract-banner.svelte';
</script>

<script lang="ts">
  import Breadcrumb from '$components/breadcrumb.svelte';
  const { data } = $props();
  const speaker = data.speaker;
  console.log(speaker);
</script>

<AbstractBanner />
<div class={'mt-24 flex flex-col justify-start px-6'}>
  <Breadcrumb text="Return to speakers" href="/speakers" />
  <h1 class={'text-2xl font-bold text-white'}>{speaker.fields.fullName}</h1>
  <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black p-6">
    <div>
      <p class="text-white">{speaker.fields.jobTitle}</p>
      {#if speaker.fields.bio}
        <p class="font-lilac">{@html speaker.fields.bio}</p>
      {/if}
      <div
        style="background-image: url({speaker.fields.image?.fields?.file
          ?.url!}?w=720&h=648&fm=webp);"
      ></div>
    </div>
  </div>
</div>

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

<section class={'flex flex-col justify-start gap-8 bg-grid px-6 pt-24'}>
  <Breadcrumb text="Return to speakers" href="/speakers" />
  <h1 class={'font-afacad text-5xl uppercase text-white'}>{speaker.fields.fullName}</h1>
  <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black p-6">
    <div class="gap-6">
      <p class="font-afacad text-2xl uppercase text-white">{speaker.fields.jobTitle}</p>
      {#if speaker.fields.bio}
        <p class="text-lilac">{@html speaker.content}</p>
      {/if}
      <div
        style="background-image: url({speaker.fields.image?.fields?.file
          ?.url!}?w=720&h=648&fm=webp);"
      ></div>
    </div>
  </div>
</section>

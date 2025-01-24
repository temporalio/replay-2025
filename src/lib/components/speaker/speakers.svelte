<script lang="ts">
  import type { Entry } from 'contentful';
  import type { SpeakerSkeleton } from '$lib/contentful';

  import Speaker from './speaker.svelte';
  const {
    speakers,
    animation = true,
  }: {
    speakers: Entry<SpeakerSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[];
    animation?: boolean;
  } = $props();

  const keynotes = speakers.filter((speaker) => speaker.fields.keynote);
  const regularSpeakers = speakers.filter((speaker) => !speaker.fields.keynote);
</script>

<section class="relative bg-grid">
  {#if animation}
    <div class="abstract"></div>
  {/if}
  <div class="section pb-16 pt-36">
    <h2 class="mb-8 title-medium">Speakers</h2>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8 xl:flex-row xl:flex-wrap xl:justify-between">
        {#each keynotes as speaker}
          <Speaker
            name={speaker.fields.fullName}
            jobTitle={speaker.fields.jobTitle}
            company={speaker.fields.companyName}
            image={speaker.fields.image?.fields.file?.url!}
            type="keynote"
            slug={speaker.fields.slug}
          />
        {/each}
      </div>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {#each regularSpeakers as speaker}
          <Speaker
            name={speaker.fields.fullName}
            jobTitle={speaker.fields.jobTitle}
            company={speaker.fields.companyName}
            image={speaker.fields.image?.fields.file?.url!}
            slug={speaker.fields.slug}
          />
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .abstract {
    position: absolute;
    background-image: url('$assets/backgrounds/abstract-top.png');
    background-repeat: no-repeat;
    background-size: auto contain;
    height: 7rem;
    width: 75rem;
    max-width: 100%;
  }

  @supports (animation-timeline: scroll(y)) {
    @media screen(lg) {
      @keyframes stonehenge-move {
        0% {
          transform: translateX(-100vw);
        }
        45% {
          transform: translateX(0);
        }
      }

      .abstract {
        background-position: top left;
        animation: stonehenge-move 1s linear;
        animation-timeline: scroll(y nearest);
      }
    }
  }
</style>

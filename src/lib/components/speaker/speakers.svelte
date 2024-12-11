<script>
  import Speaker from './speaker.svelte';
</script>

<section class="relative bg-grid">
  <div class="abstract"></div>
  <div class="section pb-16 pt-36">
    <h2 class="mb-8 title-medium">Speakers</h2>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8 xl:flex-row xl:flex-wrap xl:justify-between">
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
          type="keynote"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
          type="keynote"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
          type="keynote"
        />
      </div>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
        />
        <Speaker
          name="Jen Looper"
          jobTitle="Senior Developer Advocate"
          company="Microsoft"
          image="https://placebeard.it/360x400"
        />
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

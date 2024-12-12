<section class="bg-green text-black">
  <div class="section py-20">
    <div class="rounded bg-green/50 backdrop-blur-lg lg:ml-0 lg:w-160">
      <h2 class="title-small">What's with all the buildings?</h2>
      <p class="body-medium">
        The visual theme for Replay 2025 draws inspiration from iconic historic landmarks across the
        world like the Colosseum and Stonehenge — symbols of technology that pushed the boundaries
        of invention during their time.
      </p>
      <p class="body-medium">
        These visuals work to show the contrast between technological achievements of the past and
        the backend technology featured at Replay, highlighting the progress that’s been made over
        time.
      </p>
    </div>
  </div>
</section>

<style lang="postcss">
  section {
    --colosseum: url('$assets/backgrounds/colosseum.png');
    --abstract: url('$assets/backgrounds/abstract-footer.png');

    background-image: var(--colosseum), var(--abstract);
    background-repeat: no-repeat;
    background-position:
      center bottom -270px,
      left bottom;
    padding-bottom: 200px;
  }

  @media screen(md) {
    section {
      background-position:
        calc(40vw + 2rem) calc(100% + 6rem),
        left bottom;
      padding-bottom: 18rem;
    }
  }

  @media screen(lg) {
    :root {
      --section-margins: calc(100vw - 1024px);
    }

    @supports (animation-timeline: scroll(y)) {
      @keyframes buildings-move {
        0% {
          background-position:
            left 200vw bottom,
            right bottom;
        }
        60% {
          background-position:
            calc(50vw + 40rem) bottom,
            right bottom;
        }
      }

      section {
        animation-name: buildings-move;
        animation-duration: 1ms;
        animation-timing-function: linear;
        animation-timeline: scroll(y);
        padding-bottom: theme('spacing.32');
      }
    }
  }
</style>

<section class="bg-green text-black">
  <div class="section py-20">
    <div class="lg:ml-0 lg:w-2/3">
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
    background-image: url('$assets/backgrounds/colosseum.png'),
      url('$assets/backgrounds/abstract-footer.png');
    background-repeat: no-repeat, no-repeat;
    background-position:
      center bottom calc(-270px),
      left bottom;
    padding-bottom: 200px;
  }

  @media screen(md) {
    section {
      background-position:
        calc(50vw + theme('spacing.8')) calc(100% + theme('spacing.24')),
        left bottom;
      padding-bottom: theme('spacing.96');
    }
  }

  @media screen(lg) {
    @supports (animation-timeline: scroll(y)) {
      @keyframes buildings-move {
        0% {
          background-position:
            left calc(200vw + theme('spacing.8')) bottom -10px,
            right bottom;
        }
        90% {
          background-position:
            left calc(65vw + theme('spacing.8')) bottom -10px,
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

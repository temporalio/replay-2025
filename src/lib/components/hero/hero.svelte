<script>
  import links from '$content/links.yaml';
  import Button from '$components/button/button.svelte';
</script>

<header class="flex flex-col bg-black px-1 pt-12">
  <div class="container mx-auto flex max-w-7xl flex-col gap-8 2xl:max-w-9xl">
    <time class="hero-subtitle block text-nowrap uppercase text-white" datetime="2025-03-03">
      London • Mar 3-5, 2025
    </time>
    <h1 class="hero-title uppercase">
      <span class="block text-nowrap">Modernise</span>
      <span class="block text-nowrap">the Monolith</span>
    </h1>
    <Button intent="primary" href={links.tickets} label="Get Your Ticket" />
  </div>
</header>

<style lang="postcss">
  :root {
    --stonehenge-background: url('$assets/backgrounds/stonehenge.png');
    --stonehenge-origin: center;
    --stonehenge-height: 738px;
    --stonehenge-space-below: theme('spacing.96');
    --stonehenge-scroll-adjustment: 10%;
    --lines-background: url('$assets/backgrounds/lines.svg');
    --lines-position: top left;
  }

  header {
    background-image: var(--stonehenge-background), var(--lines-background);
    background-repeat: no-repeat;
    padding-bottom: var(--stonehenge-space-below);
    background-position:
      var(--stonehenge-origin) bottom calc(var(--stonehenge-space-below) - var(--stonehenge-height)),
      var(--lines-position);
  }

  @supports (background-image: url('$assets/backgrounds/stonehenge.webp')) {
    :root {
      --stonehenge-background: url('$assets/backgrounds/stonehenge.webp');
    }
  }

  @supports (animation-timeline: scroll(y)) {
    @keyframes stonehenge-move {
      0% {
        background-size:
          150% auto,
          auto;
        background-position:
          var(--stonehenge-origin) bottom
            calc(var(--stonehenge-space-below) - var(--stonehenge-height)),
          var(--lines-position);
      }
      10% {
        background-size:
          100% auto,
          auto;
        background-position:
          var(--stonehenge-origin) bottom
            calc(
              var(--stonehenge-space-below) - var(--stonehenge-height) +
                var(--stonehenge-scroll-adjustment)
            ),
          var(--lines-position);
      }
    }

    header {
      background-position: initial;
      animation: stonehenge-move 1s linear;
      animation-timeline: scroll(y nearest);
    }
  }

  @media screen(md) {
    header {
      --stonehenge-origin: left;
      --stonehenge-space-below: theme('spacing.144');
    }
  }
</style>

<script>
  import links from '$content/links.yaml';
  import Button from '$components/button/button.svelte';
</script>

<header class="flex flex-col bg-black px-1 pt-12">
  <div class="container mx-auto flex max-w-7xl flex-col gap-4 2xl:max-w-9xl">
    <time class="hero-subtitle block text-nowrap uppercase text-white" datetime="2025-03-03">
      London • Mar 3-5, 2025
    </time>
    <h1 class="hero-title uppercase">
      <span class="block text-nowrap after:content-[':']">Replay</span>
      <span class="block text-nowrap">Modernise</span>
    </h1>
    <p class="font-afacad text-3xl uppercase tracking-widest text-white">
      Leave behind outdated systems and traditional approaches to embrace cutting-edge
      technology at Replay 2025.
    </p>
    <Button intent="primary" href={links.tickets} label="Get Your Ticket" />
  </div>
</header>

<style lang="postcss">
  :root {
    --stonehenge-background: url('$assets/backgrounds/stonehenge.png');
    --stonehenge-height: 738px;
    --stonehenge-space-below: theme('spacing.72');
    --lines-background: url('$assets/backgrounds/lines.svg');
  }

  @media screen(md) {
    :root {
      --stonehenge-space-below: theme('spacing.144');
    }
  }

  header {
    background-image: var(--stonehenge-background), var(--lines-background);
    background-repeat: no-repeat;
    padding-bottom: var(--stonehenge-space-below);
    background-size: auto, auto;
    background-position:
      50% calc(100% + var(--stonehenge-height) - var(--stonehenge-space-below)),
      top left;
  }

  @supports (background-image: url('$assets/backgrounds/stonehenge.webp')) {
    :root {
      --stonehenge-background: url('$assets/backgrounds/stonehenge.webp');
    }
  }

  @supports (animation-timeline: scroll(y nearest)) {
    @keyframes stonehenge-parallax {
      0% {
        background-size:
          auto var(--stonehenge-height),
          auto;
        background-position:
          50% calc(100% + var(--stonehenge-height) - var(--stonehenge-space-below)),
          top left;
      }
      15% {
        background-size:
          auto var(--stonehenge-space-below),
          auto;
        background-position:
          40% calc(100% + 4rem),
          top left;
      }
    }

    header {
      animation: stonehenge-parallax 1s forwards;
      animation-timeline: scroll(y nearest);
    }
  }
</style>

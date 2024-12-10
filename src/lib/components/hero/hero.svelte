<script>
  import links from '$content/links.yaml';
  import Button from '$components/button/button.svelte';
</script>

<header class="flex flex-col bg-black px-1 pt-12">
  <div class="container mx-auto flex max-w-7xl flex-col gap-8 2xl:max-w-9xl">
    <p class="hero-subtitle text-nowrap uppercase text-white">London • Mar 3-5, 2025</p>
    <h1 class="hero-title uppercase">
      <span class="block text-nowrap">Modernize</span>
      <span class="block text-nowrap">the Monolith</span>
    </h1>
    <Button intent="primary" href={links.tickets} label="Get Your Ticket" />
  </div>
</header>

<style lang="postcss">
  :root {
    --stonehenge-origin: center;
    --stonehenge-height: 738px;
    --stonehenge-space-below: theme('spacing.96');
    --stonehenge-scroll-adjustment: 20%;
  }

  @keyframes stonehenge-move {
    0% {
      background-position: var(--stonehenge-origin) bottom
        calc(var(--stonehenge-space-below) - var(--stonehenge-height));
    }
    10% {
      background-position: var(--stonehenge-origin) bottom
        calc(
          var(--stonehenge-space-below) - var(--stonehenge-height) +
            var(--stonehenge-scroll-adjustment)
        );
    }
  }

  header {
    background-image: url('$assets/backgrounds/stonehenge@2x.png');
    background-repeat: no-repeat;
    padding-bottom: var(--stonehenge-space-below);
    animation: stonehenge-move 0.1s linear;
    animation-timeline: scroll(y nearest);
  }

  @media (min-width: 768px) {
    header {
      --stonehenge-origin: left;
      --stonehenge-space-below: theme('spacing.160');
      --stonehenge-scroll-adjustment: 15%;
    }
  }
</style>

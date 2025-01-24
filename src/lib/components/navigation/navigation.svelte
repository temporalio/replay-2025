<script lang="ts">
  import links from '$content/links.yaml';
</script>

{#snippet navigationItem({ href, label }: { href: string; label: string })}
  <a
    {href}
    class="block h-24 border-b border-b-lilac-dark px-4 py-8 uppercase last:border-b-0 hover:bg-slate-900 lg:h-auto lg:border-b-0 lg:bg-transparent lg:py-2"
  >
    <li>
      {label}
    </li>
  </a>
{/snippet}

<nav
  class="sticky top-0 z-10 flex h-20 flex-row items-center justify-between border-b-2 border-b-lilac-dark bg-black p-4 lg:gap-8"
>
  <div class="background absolute left-0 top-0 -z-10 h-full w-full"></div>
  <input
    type="checkbox"
    id="navigation-menu"
    class="peer hidden"
    aria-labelledby="navigation-menu-button"
  />
  <a href="/" class="h-10" aria-label="Replay">
    <enhanced:img src="$assets/replay.svg" alt="Replay 2025" class="h-10" />
  </a>
  <label for="navigation-menu" class="cursor-pointer lg:hidden">
    <enhanced:img src="$assets/menu.svg" alt="Menu" class="h-10" id="navigation-menu-button" />
  </label>
  <ul
    class="absolute left-0 top-20 hidden w-full flex-col bg-black/90 text-white backdrop-blur-lg peer-checked:flex lg:relative lg:top-0 lg:flex lg:flex-row lg:gap-4 lg:bg-transparent"
    role="list"
  >
    {@render navigationItem({ href: links.speakers, label: 'Speakers' })}
    {@render navigationItem({ href: links.schedule, label: 'Schedule' })}
    {@render navigationItem({ href: links.faq, label: 'FAQ' })}
    {@render navigationItem({ href: links.codeOfConduct, label: 'Code of Conduct' })}
  </ul>
</nav>

<style lang="postcss">
  @keyframes navigation-color {
    0% {
      opacity: 0%;
    }
    10% {
      opacity: 100%;
    }
  }

  @supports (animation-timeline: scroll(root)) {
    .background {
      background-image: theme('backgroundImage.red-to-pink');
      animation: navigation-color 1s linear;
      animation-timeline: scroll(root);
    }
  }
</style>

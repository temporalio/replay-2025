<script lang="ts">
  import links from '$content/links.yaml';
  import replay from '$assets/replay.svg';
  import menu from '$assets/menu.svg';
</script>

{#snippet navigationItem({ href, label }: { href: string; label: string })}
  <a
    {href}
    class="block h-24 border-b border-b-lilac-dark px-4 py-8 uppercase last:border-b-0 hover:bg-slate-900 2xl:h-auto 2xl:border-b-0 2xl:py-2"
  >
    <li>
      {label}
    </li>
  </a>
{/snippet}

<nav
  class="sticky top-0 z-10 flex h-20 flex-row items-center justify-between border-b-2 border-b-lilac-dark bg-black p-4 2xl:gap-8"
>
  <div class="background absolute left-0 top-0 -z-10 h-full w-full"></div>
  <input
    type="checkbox"
    id="navigation-menu"
    class="peer hidden"
    aria-labelledby="navigation-menu-button"
  />
  <a href="/" class="h-10">
    <img src={replay} alt="Replay 2025" class="h-10" />
  </a>
  <label for="navigation-menu" class="cursor-pointer 2xl:hidden">
    <img src={menu} alt="Menu" class="h-10" id="navigation-menu-button" />
  </label>
  <ul
    class="absolute left-0 top-20 hidden w-full flex-col bg-black/80 text-white peer-checked:flex 2xl:relative 2xl:top-0 2xl:flex 2xl:flex-row 2xl:gap-4"
    role="list"
  >
    {@render navigationItem({ href: links.cfp, label: 'Speaker CFP' })}
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

  .background {
    background-image: theme('backgroundImage.red-to-pink');
    animation: navigation-color 1s linear;
    animation-timeline: scroll(root);
  }
</style>

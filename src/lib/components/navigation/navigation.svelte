<script lang="ts">
  import links from '$content/links.yaml';
  import replay from '$assets/replay.svg';
  import menu from '$assets/menu.svg';
</script>

{#snippet navigationItem({ href, label }: { href: string; label: string })}
  <a
    {href}
    class="border-b-lilac-dark block h-24 border-b px-4 py-8 uppercase last:border-b-0 hover:bg-slate-900 2xl:h-auto 2xl:border-b-0 2xl:py-2"
  >
    <li>
      {label}
    </li>
  </a>
{/snippet}

<div class="sticky">
  <nav
    class="border-b-lilac-dark sticky flex h-20 flex-row items-center justify-between border-b-2 bg-black p-4 2xl:gap-8"
  >
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
      class="absolute left-0 top-20 hidden w-full flex-col bg-black text-white peer-checked:flex 2xl:relative 2xl:top-0 2xl:flex 2xl:flex-row 2xl:gap-4"
      role="list"
    >
      {@render navigationItem({ href: links.cfp, label: 'Speaker CFP' })}
      {@render navigationItem({ href: links.codeOfConduct, label: 'Code of Conduct' })}
    </ul>
  </nav>
</div>

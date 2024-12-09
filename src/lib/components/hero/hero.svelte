<script>
  import links from '$content/links.yaml';
  import Button from '$components/button/button.svelte';
</script>

<header
  class="h-[768px] bg-black bg-stonehenge bg-[length:1024px] bg-[center_bottom_-20px] bg-no-repeat px-1 pt-12"
>
  <div class="2xl:max-w-9xl container mx-auto flex max-w-7xl flex-col gap-8">
    <p class="hero-subtitle text-nowrap uppercase text-white">London • Mar 3-5, 2025</p>
    <h1 class="hero-title uppercase">
      <span class="block text-nowrap">Modernize</span>
      <span class="block text-nowrap">the Monolith</span>
    </h1>
    <Button intent="primary" href={links.tickets} label="Get Your Ticket" />
  </div>
</header>

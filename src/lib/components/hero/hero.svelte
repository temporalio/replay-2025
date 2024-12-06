<script>
  import links from '$content/links.yaml';
  import Button from '$components/button/button.svelte';
</script>

<header
  class="pb-128 bg-black bg-stonehenge bg-[center_bottom_-200px] bg-no-repeat px-1 pt-12 font-afacad"
>
  <div class="2xl:max-w-9xl container mx-auto flex max-w-7xl flex-col gap-8">
    <p class="hero-subtitle uppercase text-white">London • Mar 3-5, 2025</p>
    <h1 class="hero-title uppercase">Modernize the Monolith</h1>
    <Button intent="primary" href={links.tickets} label="Get Your Ticket" />
  </div>
</header>

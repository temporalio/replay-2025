<script lang="ts">
  import { Button } from './button';
  import links from '$content/links.yaml';

  const { heading }: { heading: string } = $props();
</script>

<section class="bg-pink py-12">
  <div class="section flex flex-col items-center gap-8">
    <h2 class="text-center font-afacad text-6xl uppercase">{heading}</h2>
    <div class="flex flex-col gap-8 lg:my-8 lg:flex-row">
      <ul class="flex items-end justify-between gap-8">
        <li class="font-afacad text-6xl text-slate-900 line-through">£250</li>
        <li class="font-jaro text-8xl md:text-9xl">£150</li>
      </ul>
      <Button intent="secondary" label="Get Your Ticket" href={links.tickets} />
    </div>
    <p class="text-center text-2xl text-pink-dark">Early bird ticket sales end on January 7.</p>
  </div>
</section>

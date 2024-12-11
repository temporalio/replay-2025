<script lang="ts">
  import Tier from './sponsor-tier.svelte';
  import bitovi from '$assets/sponsors/bitovi.svg';
  import type { SponsorTier } from './sponsor.types';
  import { twMerge as merge } from 'tailwind-merge';
</script>

{#snippet sponsor({
  name,
  image,
  href,
  tier,
}: {
  name: string;
  image: string;
  href: string;
  tier: SponsorTier;
})}
  <a {href} class="block">
    <img
      src={image}
      alt={name}
      class={merge(
        'block',
        tier === 'Impact' && 'max-h-8',
        tier === 'Premier' && 'max-h-14',
        tier === 'Elite' && 'max-h-20',
      )}
    />
  </a>
{/snippet}

<section class="bg-green text-black">
  <div class="section py-16">
    <header class="mb-20">
      <h2 class="uppercase title-medium">Sponsors</h2>
    </header>
    <div class="space-y-16">
      <Tier title="Elite">
        {@render sponsor({
          name: 'Bitovi',
          image: bitovi,
          href: 'https://bitovi.com',
          tier: 'Elite',
        })}
        {@render sponsor({
          name: 'Bitovi',
          image: bitovi,
          href: 'https://bitovi.com',
          tier: 'Elite',
        })}
      </Tier>
      <Tier title="Premier">
        {@render sponsor({
          name: 'Bitovi',
          image: bitovi,
          href: 'https://bitovi.com',
          tier: 'Premier',
        })}
        {@render sponsor({
          name: 'Bitovi',
          image: bitovi,
          href: 'https://bitovi.com',
          tier: 'Premier',
        })}
      </Tier>
      <Tier title="Impact">
        {@render sponsor({
          name: 'Bitovi',
          image: bitovi,
          href: 'https://bitovi.com',
          tier: 'Impact',
        })}
        {@render sponsor({
          name: 'Bitovi',
          image: bitovi,
          href: 'https://bitovi.com',
          tier: 'Impact',
        })}
      </Tier>
    </div>
  </div>
</section>

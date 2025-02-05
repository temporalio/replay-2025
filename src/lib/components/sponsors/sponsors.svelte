<script lang="ts">
  import Tier from './sponsor-tier.svelte';
  import type { Sponsor } from '$lib/contentful/sponsor';
  import { twMerge as merge } from 'tailwind-merge';

  export let elite: Sponsor<never, string>[] = [];
  export let premier: Sponsor<never, string>[] = [];
  export let impact: Sponsor<never, string>[] = [];

  const getImageUrl = (asset: any): string | null => {
    return asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : null;
  };
</script>

<section class="bg-green text-black">
  <div class="section py-16">
    <header class="mb-20">
      <h2 class="uppercase title-medium">Sponsors</h2>
    </header>

    <div class="space-y-16">
      {#if elite.length}
        <Tier title="Elite">
          {#each elite as sponsor}
            {#if getImageUrl(sponsor.fields.darkLogo)}
              <a href={sponsor.fields.externalUrl} class="block">
                <img
                  src={getImageUrl(sponsor.fields.darkLogo)}
                  alt={sponsor.fields.name}
                  class={merge('block', 'max-h-20')}
                />
              </a>
            {/if}
          {/each}
        </Tier>
      {/if}

      {#if premier.length}
        <Tier title="Premier">
          {#each premier as sponsor}
            {#if getImageUrl(sponsor.fields.darkLogo)}
              <a href={sponsor.fields.externalUrl} class="block">
                <img
                  src={getImageUrl(sponsor.fields.darkLogo)}
                  alt={sponsor.fields.name}
                  class={merge('block', 'max-h-14')}
                />
              </a>
            {/if}
          {/each}
        </Tier>
      {/if}

      {#if impact.length}
        <Tier title="Impact">
          {#each impact as sponsor}
            {#if getImageUrl(sponsor.fields.darkLogo)}
              <a href={sponsor.fields.externalUrl} class="block">
                <img
                  src={getImageUrl(sponsor.fields.darkLogo)}
                  alt={sponsor.fields.name}
                  class={merge('block', 'h-8')}
                />
              </a>
            {/if}
          {/each}
        </Tier>
      {/if}
    </div>
  </div>
</section>

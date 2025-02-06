<script lang="ts">
  import type { Sponsor } from '$lib/contentful/sponsor';
  export let sponsor;
</script>

<div>
  {#if sponsor.fields.lightLogo}
    <div>
      {#if sponsor.fields.sponsorType === 'Elite'}
        <img
          src={sponsor.fields.lightLogo.fields.file.url}
          alt={sponsor.fields.name}
          class="sponsor-logo max-h-20"
        />
      {/if}
      {#if sponsor.fields.sponsorType === 'Premier'}
        <img
          src={sponsor.fields.lightLogo.fields.file.url}
          alt={sponsor.fields.name}
          class="sponsor-logo max-h-10"
        />
      {/if}
      {#if sponsor.fields.sponsorType === 'Impact'}
        <img
          src={sponsor.fields.lightLogo.fields.file.url}
          alt={sponsor.fields.name}
          class="sponsor-logo max-h-8"
        />
      {/if}
    </div>
  {/if}
  <p class="prose prose-invert py-2 text-lilac">{sponsor.fields.description}</p>
  <a
    href={sponsor.fields.externalUrl}
    target="_blank"
    class="text-lilac underline hover:text-white hover:no-underline"
    >{sponsor.fields.name}
  </a>
</div>

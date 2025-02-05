<script lang="ts">
  import type { Sponsor } from '$lib/contentful/sponsor';
  export let sponsor;
</script>

<div>
  {#if sponsor.fields.lightLogo}
    <img
      src={sponsor.fields.lightLogo.fields.file.url}
      alt={sponsor.fields.name}
      class="sponsor-logo"
    />
  {/if}
  <p class="prose prose-invert text-lilac">{sponsor.fields.description}</p>
  <a
    href={sponsor.fields.externalUrl}
    target="_blank"
    class="text-lilac underline hover:text-white hover:no-underline"
    >{sponsor.fields.name}
  </a>
</div>

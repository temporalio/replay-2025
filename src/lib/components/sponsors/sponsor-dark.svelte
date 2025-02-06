<script lang="ts">
  export let sponsor;
  import { twMerge as merge } from 'tailwind-merge';
</script>

<div class="w-full text-xl">
  {#if sponsor.fields.lightLogo}
    <div>
      <img
        src={sponsor.fields.lightLogo.fields.file.url}
        alt={sponsor.fields.name}
        class={merge('block', sponsor.fields.sponsorType.toLowerCase() || '')}
      />
    </div>
  {/if}
  <p class="prose prose-invert py-4 text-xl text-lilac">{sponsor.fields.description}</p>
  <a
    href={sponsor.fields.externalUrl}
    target="_blank"
    class="text-lilac underline hover:text-white hover:no-underline"
    >{sponsor.fields.externalUrl}
  </a>
</div>

<style lang="postcss">
  .elite {
    max-height: 5rem;
  }

  .premier {
    max-height: 2.5rem;
  }

  .impact {
    max-height: 2rem;
  }
</style>

<script lang="ts">
  import { speaker, portrait, type SpeakerProps } from './variants';

  const { type, image, name, company, jobTitle }: SpeakerProps = $props();
  const isKeynote = $derived(type === 'keynote');
</script>

<div class={speaker({ type })}>
  <div class={portrait({ type })} style="background-image: url({image});"></div>
  <div class="min-h-40 w-full p-4">
    {#if isKeynote}
      <p class="font-pixelated uppercase text-green-dark">Keynote</p>
    {/if}
    <h2 class="font-semibold">{name}</h2>
    <p class="text-sm">{jobTitle}</p>
    <p class="text-sm">{company}</p>
  </div>
</div>

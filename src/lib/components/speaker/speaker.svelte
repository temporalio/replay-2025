<script lang="ts">
  import { speaker, portrait, speakerName, type SpeakerProps } from './variants';

  const { type, image, name, company, jobTitle, slug }: SpeakerProps = $props();
  const isKeynote = $derived(type === 'keynote');
</script>

<a class={speaker({ type })} href={`/speakers/${slug}`}>
  <div class={portrait({ type })} style="background-image: url({image}?w=720&h=648&fm=webp);"></div>
  <div class="min-h-40 w-full p-4">
    {#if isKeynote}
      <p class="font-pixelated text-base uppercase text-green-dark">Keynote</p>
    {/if}
    <h2 class={speakerName({ type })}>{name}</h2>
    <p>{jobTitle}</p>
    <p>{company}</p>
  </div>
</a>

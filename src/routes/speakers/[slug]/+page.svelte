<script lang="ts" module>
  import Footer from '$components/footer.svelte';
</script>

<script lang="ts">
  import Breadcrumb from '$components/breadcrumb.svelte';
  const { data } = $props();
  const speaker = data.speaker;
</script>

<section class={'flex w-full flex-col justify-start gap-12 bg-grid px-6 py-60'}>
  <Breadcrumb text="Return to speakers" href="/speakers" />
  <h1 class={'font-afacad text-5xl uppercase text-white'}>{speaker.fields.fullName}</h1>
  <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black p-6">
    <div class="flex flex-row items-start gap-6 max-sm:flex-col">
      {#if speaker.fields.bio}
        <div class="flex-1">
          <p class="text-lilac">{@html speaker.content}</p>
        </div>
      {/if}
      <div
        style="background-image: url({speaker.fields.image && 'fields' in speaker.fields.image
          ? speaker.fields.image.fields.file?.url
          : ''}?w=720&h=648&fm=webp);"
        class="h-[200px] w-[200px] flex-shrink-0 bg-cover bg-center"
      ></div>
    </div>
  </div>
</section>
<Footer />
<!-- TO DO: Need to add the talks for the individual speaker -->

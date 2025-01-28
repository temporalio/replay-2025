<script lang="ts">
  import Breadcrumb from '$components/breadcrumb.svelte';
  import { speakerName } from '$components/speaker/variants';
  const { data } = $props();
  const session = data.session;
  const speakers = session.fields.speakers;

  let speakerFullName = $state('');
  let speakerBio: string | undefined = '';

  if (Array.isArray(speakers)) {
    speakers.forEach((speaker) => {
      if ('fields' in speaker && speaker.fields.fullName) {
        speakerFullName = speaker.fields.fullName;
        speakerBio = speaker.fields.bio;
        // console.log(speakerBio, speakerFullName);
      } else {
        // console.log('Speaker is unresolved or missing fields: ', speaker);
      }
    });
  }
</script>

<section class={' relative flex flex-col items-center justify-center gap-8 bg-grid px-6 pt-24'}>
  <div class={'flex max-w-6xl flex-col justify-start gap-8'}>
    <Breadcrumb text="Return to schedule" href="/schedule" />
    <h1 class={'font-afacad text-5xl uppercase text-white'}>{session.fields.title}</h1>
    <div class="flex flex-col items-start pr-10 text-green md:block">Date goes here</div>
    <div class="flex w-full flex-col gap-4 border border-grey bg-black p-6">
      <h3 class="font-josefin text-xl uppercase text-white">Abstract</h3>
      <div class="gap-6">
        <p class="font-afacad text-2xl uppercase text-white">{session.fields.location}</p>
        {#if session.content}
          <p class="text-lilac">{@html session.content}</p>
        {/if}
      </div>
      <div>
        <h3 class="font-josefin text-xl uppercase text-white">About the Presenter</h3>
        {#if speakers}
          <div class="flex flex-col gap-4 py-6 text-lilac">
            <!-- <a
              href="/speakers/{speakers?.fields.slug}"
              class="font-sans text-lg font-bold text-white">{speakers?.fields.fullName}</a
            > -->
            <!-- <p>{speakerFullName}</p> -->
            <p>{speakerBio}</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  import Breadcrumb from '$components/breadcrumb.svelte';
  const { data } = $props();

  const { session, speakers, date, hasSpeakers, description } = data;
</script>

<section class="relative flex flex-col items-center justify-center gap-8 bg-grid px-6 py-24">
  <div class="container flex max-w-6xl flex-col justify-start gap-8">
    <Breadcrumb text="Return to schedule" href="/schedule" />
    <h1 class="font-afacad text-5xl uppercase text-white max-xs:text-2xl">{session.title}</h1>
    <div class="flex flex-col items-start pr-10 text-green md:block">
      {date} •
      {session.location}
    </div>

    <div class="flex w-full flex-col gap-4 border border-grey bg-black p-6">
      <h3 class="font-josefin text-xl uppercase text-white">Abstract</h3>
      <div class="gap-6">
        {#if description}
          <p class="prose prose-invert text-xl text-lilac">{@html description}</p>
        {/if}
      </div>

      {#if Array.isArray(speakers) && hasSpeakers}
        <div>
          <h3 class="font-josefin text-xl uppercase text-white">
            {speakers.length > 1 ? 'About the Presenters' : 'About the Presenter'}
          </h3>

          {#each speakers as speaker (speaker.sys.id)}
            {#if 'fields' in speaker}
              <div class="flex flex-col gap-4 py-6 text-xl text-lilac">
                <p>{speaker.fields.bio}</p>
                <a href="/speakers/{speaker.fields.slug}" class="group max-w-fit">
                  <div class="speaker-card flex">
                    <div class="aspect-square max-w-[80px]">
                      <img
                        src={speaker.portrait || ''}
                        alt={speaker.fields.fullName || 'Speaker'}
                      />
                    </div>
                    <div class="flex flex-col px-4">
                      <div
                        class="pb-2 font-sans text-xl font-bold text-white group-hover:underline"
                      >
                        {speaker.fields.fullName}
                      </div>
                      <div class="font-sans text-base text-lilac">
                        {speaker.fields.jobTitle}
                      </div>
                      <div class="font-sans text-base text-lilac">
                        {speaker.fields.companyName}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>

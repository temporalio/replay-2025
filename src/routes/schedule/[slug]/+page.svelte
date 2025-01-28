<script lang="ts">
  import Breadcrumb from '$components/breadcrumb.svelte';
  const { data } = $props();
  const session = data.session;
</script>

<section class={' relative flex flex-col items-center justify-center gap-8 bg-grid px-6 pt-24'}>
  <div class={'flex max-w-6xl flex-col justify-start gap-8'}>
    <Breadcrumb text="Return to schedule" href="/schedule" />
    <h1 class={'font-afacad text-5xl uppercase text-white'}>{session.fields.title}</h1>
    <div class="flex flex-col items-start pr-10 text-green md:block">Date goes here</div>
    <div class="flex w-full flex-col items-center gap-4 border border-grey bg-black p-6">
      <div class="gap-6">
        <p class="font-afacad text-2xl uppercase text-white">{session.fields.location}</p>
        {#if session.content}
          <p class="text-lilac">{@html session.content}</p>
        {/if}
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  import map from '$assets/map.png';
  import links from '$content/links.yaml';
</script>

<section class="bg-grid">
  <div class="section flex flex-col py-20 lg:flex-row lg:items-center">
    <div class="space-y-8">
      <h2 class="title-small">Location</h2>
      <p class="font-afacad text-lg uppercase text-green">Convene at 22 Bishopsgate in London</p>
      <p class="body-small">
        Convene 22 Bishopsgate is located within one of London's most famous skyscrapers and the
        second-tallest building in the city, an iconic part of the evolving skyline.
      </p>
      <a
        href={links.venue}
        target="_blank"
        class="inline-flex items-center gap-2 font-bold uppercase after:block after:h-6 after:w-6 after:content-arrow hover:underline hover:decoration-pink hover:decoration-2 hover:underline-offset-2"
      >
        <span class="block">Visit convene.com for more info</span>
      </a>
    </div>
    <a href={links.map} target="_blank" class="block">
      <img src={map} alt="Convene" />
    </a>
  </div>
</section>

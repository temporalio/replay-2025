<script lang="ts">
  import { Button } from '$components/button';
  import highlights from '$assets/highlights.png';
</script>

<section>
  <div class="flex flex-col items-center">
    <img src={highlights} alt="Highlights" class="block w-full md:w-fit" />
    <Button intent="secondary" label="Play 2024 Reel" />
  </div>
</section>

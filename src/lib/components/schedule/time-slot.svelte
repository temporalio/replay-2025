<script lang="ts">
  const { startTime, endTime, talk }: TimeSlotProps = $props();

  const talkOne : talk[0]
  const talkTwo?: talk[1]
</script>

<div class={'border-b py-6 '}>
  <div class="text-green">
    <p>{startTime} -</p>
    <p>{endTime}</p>
  </div>
  <div>
    <p>{talkOne}</p>
    {#if talkTwo}
      <p>{talkTwo}</p>
    {/if}
  </div>
</div>
{#if talkTwo}
  <div class={'border-b py-6 '}>
    <div class="text-green">
      <p>{startTime} -</p>
      <p>{endTime}</p>
    </div>
    <div>
      <p>{talkTwo}</p>
    </div>
  </div>
{/if}

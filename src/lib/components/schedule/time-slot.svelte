<script lang="ts">
  const { title, startTime, endTime, talk }: TimeSlotProps = $props();
</script>

<div class={'border-b py-6 '}>
  <div class="text-green">
    <p>{startTime} -</p>
    <p>{endTime}</p>
  </div>
  <div>
    <p>{title}</p>
  </div>
</div>

<!-- TO DO: 
Function - need to have two different stylings for lg view port. First styling will show the time, 
second will not show the time except on < med -->

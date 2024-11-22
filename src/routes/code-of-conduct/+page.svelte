<script lang="ts">
  import Button from '$components/button.svelte';
  import CodeOfConduct from '$content/code-of-conduct.md';
</script>

<svelte:head>
  <title>Code of Conduct | Replay 2025</title>
</svelte:head>

<section class="bg-pear container my-10 max-w-5xl space-y-8 py-12">
  <h1 class="prose font-jaro text-4xl">Code of Conduct</h1>

  <Button href="https://forms.gle/CciLKfYRWGs38qnV7">Harassment Complaint Form</Button>

  <CodeOfConduct class="prose" />
</section>

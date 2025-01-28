<script lang="ts">
  import CodeOfConduct from '$content/code-of-conduct.md';
  import { Button } from '$components/button';
</script>

<svelte:head>
  <title>Code of Conduct | Replay 2025</title>
</svelte:head>

<section class="container my-10 max-w-5xl space-y-8 bg-green py-12">
  <h1 class="prose font-jaro text-4xl">Code of Conduct</h1>

  <Button
    intent="tertiary"
    href="https://forms.gle/CciLKfYRWGs38qnV7"
    label="Harassment Complaint Form"
  />

  <CodeOfConduct class="prose prose-invert" />
</section>

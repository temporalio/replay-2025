<script lang="ts">
  import '../app.css';

  import metadata from '$content/metadata.yaml';
  import openGraph from '$assets/open-graph.png';

  import CookieConsent from '$components/cookie-consent.svelte';

  const { children } = $props();
</script>

<main>
  {@render children()}
  <CookieConsent />
</main>

<svelte:head>
  <meta property="og:title" content={metadata.title} />
  <meta name="description" content={metadata.description} />
  <meta property="og:description" content={metadata.description} />
  <meta property="description" content={metadata.description} />
  <meta property="og:site_name" content={metadata.title} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://replay.temporal.io" />
  <meta property="og:image" content={openGraph} />
  <meta property="og:start_date" content="2025-03-03" />
  <meta property="og:end_date" content="2025-03-05" />
  <meta property="og:venue" content="Convene 22 Bishopsgate" />
  <meta property="og:location" content="22 Bishopsgate, London EC2N 4BQ, United Kingdom" />
  <meta property="twitter:image" content={openGraph} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={metadata.description} />
  <meta property="twitter:description" content={metadata.description} />
</svelte:head>

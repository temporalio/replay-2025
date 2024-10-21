<script lang="ts">
  import CookieConsent from '$components/cookie-consent.svelte';
  import openGraph from '$assets/open-graph.jpg';
  import metadata from '$content/metadata.yaml';

  import '../app.css';
</script>

<main>
  <slot />
  <CookieConsent />
</main>

<svelte:head>
  <meta property="og:site_name" content={metadata.title} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://replay.temporal.io" />
  <meta property="og:image" content={openGraph} />
</svelte:head>

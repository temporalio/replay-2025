<script lang="ts">
  import CookieConsent from '$components/cookie-consent.svelte';
  import openGraph from '$assets/open-graph.jpg';
  import '../app.css';
</script>

<main>
  <slot />
  <CookieConsent />
</main>

<svelte:head>
  <meta property="og:site_name" content="Replay Conference | March 3–5 2025 in London, UK" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://replay.temporal.io" />
  <meta property="og:image" content={openGraph} />
</svelte:head>

<script lang="ts">
  import '../app.css';
  import metadata from '$content/metadata.yaml';

  import logo from '$assets/logo.svg';
  import openGraph from '$assets/open-graph.png';

  import CookieConsent from '$components/cookie-consent.svelte';
  import Footer from '$components/footer.svelte';

  const { children } = $props();
</script>

<main class="grid h-screen grid-rows-[auto_1fr_auto]">
  <header class="m-8 flex justify-center">
    <h1 class="sr-only">{metadata.title}</h1>
    <p class="sr-only">{metadata.description}</p>
    <a href="/">
      <img src={logo} alt="Replay: Modernize the Monolith, March 3–5, 2025" />
    </a>
  </header>
  {@render children()}
  <Footer />
  <CookieConsent />
</main>

<svelte:head>
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="description" content={metadata.description} />
  <meta property="og:site_name" content={metadata.title} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://replay.temporal.io" />
  <meta property="og:image" content={openGraph} />
  <meta property="twitter:image" content={openGraph} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={metadata.description} />
  <meta property="twitter:description" content={metadata.description} />
</svelte:head>

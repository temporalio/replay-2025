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

<footer class="container my-24 font-display">
  <ul class="flex flex-col gap-4 md:flex-row md:justify-center">
    <li>
      <a href="https://temporal.io" class="text-white hover:underline hover:underline-offset-2">
        Temporal
      </a>
    </li>
    <li>
      <a href="/code-of-conduct" class="text-white hover:underline hover:underline-offset-2">
        Code of Conduct
      </a>
    </li>
    <li>
      <a
        href="https://temporal.io/global-privacy-policy"
        class="text-white hover:underline hover:underline-offset-2"
      >
        Privacy Policy
      </a>
    </li>
    <li>
      <a href="/2024" class="text-white hover:underline hover:underline-offset-2">Replay 2024</a>
    </li>
  </ul>
</footer>

<svelte:head>
  <meta property="og:site_name" content={metadata.title} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://replay.temporal.io" />
  <meta property="og:image" content={openGraph} />
</svelte:head>

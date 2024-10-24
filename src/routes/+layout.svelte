<script lang="ts">
  import logo from '$icons/temporal-logo.svg';

  import CookieConsent from '$components/cookie-consent.svelte';
  import openGraph from '$assets/open-graph.jpg';
  import metadata from '$content/metadata.yaml';

  import '../app.css';
</script>

<main>
  <a
    href="/"
    class="container my-10 flex flex-col items-center gap-4 font-display text-4xl uppercase"
  >
    <img src={logo} alt="Temporal logo" class="w-24" />
    <h1 class="text-6xl lg:text-9xl">Replay</h1>
    <p>March 3–5, 2025</p>
    <p>London, UK</p>
  </a>

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
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:site_name" content={metadata.title} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://replay.temporal.io" />
  <meta property="og:image" content={openGraph} />
</svelte:head>

<script lang="ts">
  import cookie from '$icons/cookie.svg';
  import { onMount } from 'svelte';

  type CookieConsentState = 'accepted' | 'rejected' | 'undecided';

  const cookieConsentKey = import.meta.env.VITE_COOKIE_CONSENT_KEY || 'temporal-cookie-consent';
  let cookieConsent: CookieConsentState | null = $state(null);

  const isCookieConsent = (state: string | null): state is CookieConsentState => {
    if (state === null) return false;
    return true;
  };

  const accept = () => {
    cookieConsent = 'accepted';
  };
  const decline = () => {
    cookieConsent = 'rejected';
  };

  onMount(() => {
    const value = localStorage.getItem(cookieConsentKey);
    cookieConsent = isCookieConsent(value) ? value : 'undecided';
  });

  $effect(() => {
    console.log('cookieConsent', cookieConsent);
    if (isCookieConsent(cookieConsent)) {
      console.log('is cookie consent');
      localStorage.setItem(cookieConsentKey, cookieConsent);
    }
  });
</script>

{#if cookieConsent === 'undecided'}
  <div class="fixed bottom-0 left-0 right-0 z-10 flex bg-black px-4 py-6 text-white">
    <div class="container flex items-center gap-8">
      <img src={cookie} alt="cookie icon" class="block w-8" />
      <div>
        <h2 class="font-mono font-medium">View Our Cookie Policy</h2>
        <p class=" font-sans text-sm font-light">
          We use cookies and similar technologies to help personalize content, tailor and measure
          ads, and provide a better experience. By clicking Accept, you agree to this as outlined in
          our
          <a
            href="https://docs.temporal.io/privacy-policy/"
            target="_blank"
            class="underline decoration-slate-400 underline-offset-4"
            rel="noreferrer"
          >
            cookie policy
          </a>.
        </p>
      </div>
      <div class="flex flex-col gap-4 md:flex-row">
        <button
          class=" w-full rounded-lg border-2 border-white px-4 py-2 hover:bg-white/20"
          onclick={accept}
        >
          Accept
        </button>
        <button
          class=" w-full rounded-lg border-2 border-white px-4 py-2 hover:bg-white/20"
          onclick={decline}
        >
          Decline
        </button>
      </div>
    </div>
  </div>
{/if}

<svelte:head>
  {#if cookieConsent === 'accepted'}
    <script
      async
      src="https://www.googletagmanager.com/gtm.js?id={import.meta.env.VITE_GMT_SECRET}"
    ></script>
  {/if}
</svelte:head>

{#if cookieConsent === 'accepted'}
  <noscript>
    <iframe
      title="Google Tag Manager"
      src="https://www.googletagmanager.com/ns.html?id={import.meta.env.VITE_GMT_SECRET}"
      height="0"
      width="0"
      style="display:none;visibility:hidden"
    ></iframe>
  </noscript>
{/if}

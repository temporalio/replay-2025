<script lang="ts">
  import { twMerge as merge } from 'tailwind-merge';
  import links from '$content/links.yaml';

  const { class: className }: { class?: string } = $props();
</script>

{#snippet link({ href, label }: { href: string; label: string })}
  <li>
    <a {href}>
      {label}
    </a>
  </li>
{/snippet}

<footer class={merge('section space-y-12 py-16', className)}>
  <ul class="flex flex-col gap-2 text-lg text-green">
    {@render link({ href: links.tickets, label: 'Get Tickets' })}
    {@render link({ href: links.codeOfConduct, label: 'Code of Conduct' })}
    {@render link({ href: links.privacy, label: 'Privacy Policy' })}
  </ul>

  <enhanced:img
    src="$assets/replay-logo-modernise.svg"
    alt="Replay: Modernise the Monolith"
    class="w-96"
  />
  <div class="flex items-center gap-4 text-sm uppercase">
    <enhanced:img src="$assets/icons/temporal-logo.svg" alt="Temporal" class="block h-16 w-16" />
    <p class="text-nowrap">© {new Date().getFullYear()} Temporal Technologies INC.</p>
  </div>
</footer>

<script lang="ts">
  import links from '$content/links.yaml';
  import logo from '$assets/replay-full-logo.svg';
  import temporal from '$assets/icons/temporal-logo.svg';

  const currentYear = new Date().getFullYear();
</script>

{#snippet link({ href, label }: { href: string; label: string })}
  <li>
    <a {href}>
      {label}
    </a>
  </li>
{/snippet}

<footer class="section space-y-12 py-16">
  <ul class="flex flex-col gap-2 text-lg text-green">
    {@render link({ href: links.tickets, label: 'Get Tickets' })}
    {@render link({ href: links.cfp, label: 'Submit Talk' })}
    {@render link({ href: links.codeOfConduct, label: 'Code of Conduct' })}
    {@render link({ href: links.privacy, label: 'Privacy Policy' })}
  </ul>

  <img src={logo} alt="Replay: Modernize the Monolith" />

  <div class="flex items-center gap-4 text-sm uppercase">
    <img src={temporal} alt="Temporal" class="block h-16 w-16" />
    <p class="text-nowrap">© {currentYear} Temporal Technologies INC.</p>
  </div>
</footer>

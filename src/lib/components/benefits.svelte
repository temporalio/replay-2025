<script lang="ts">
  import askTheExperts from '$assets/icons/ask-the-experts.svg';
  import network from '$assets/icons/network.svg';
  import futureProof from '$assets/icons/future-proof.svg';
</script>

{#snippet benefit({ icon, title, body }: { icon: string; title: string; body: string })}
  <li
    class="flex flex-col items-center gap-4 border-b border-pink px-8 py-16 text-center first:pt-0 last:border-b-0 last:pb-0 lg:border-b-0 lg:border-r lg:first:pt-16 lg:last:border-r-0"
  >
    <img src={icon} alt={title} />
    <h3 class="uppercase title-small">{title}</h3>
    <p>{body}</p>
  </li>
{/snippet}

<section>
  <ul class="flex flex-col lg:flex-row">
    {@render benefit({
      icon: askTheExperts,
      title: 'Ask the Experts',
      body: 'Get one-on-one insights into best practices and solutions.',
    })}
    {@render benefit({
      icon: network,
      title: 'Network',
      body: 'Connect with the community and learn from the best.',
    })}
    {@render benefit({
      icon: futureProof,
      title: 'Future-Proof',
      body: 'Stay ahead of the curve with the latest in tech.',
    })}
  </ul>
</section>

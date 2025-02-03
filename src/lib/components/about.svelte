<script lang="ts">
  import { twMerge as merge } from 'tailwind-merge';

  const { class: className }: { class?: string } = $props();
</script>

<section class={merge('section mt-20', className)}>
  <div class="flex flex-col gap-8 lg:flex-row">
    {@render content({
      title: 'What to Expect',
      body: "Replay '25 is your opportunity to transition from outdated systems and methodologies to cutting-edge technologies. Bring your team along for three days packed with insightful tech talks, hands-on workshops, and meaningful conversations.",
    })}
    {@render content({
      title: "What You'll Learn",
      body: "This year's theme focuses on the strategic and technical journey of evolving legacy systems, modernising infrastructure, and building the scalable, durable software that powers today's top businesses.",
    })}
  </div>
</section>

{#snippet content({ title, body }: { title: string; body: string })}
  <article class="w-full">
    <h3 class="title-small">{title}</h3>
    <p class="text-lilac body-medium">{body}</p>
  </article>
{/snippet}

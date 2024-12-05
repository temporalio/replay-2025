<script lang="ts">
  import { twMerge as merge } from 'tailwind-merge';

  const { children, class: className, ...props }: Extend<'a', { class?: string }> = $props();
</script>

<a
  {...props}
  class={merge(
    'group inline-flex gap-2 p-6 text-base font-bold uppercase text-green-dark',
    className,
  )}
>
  <span class="group-hover:underline group-hover:decoration-2 group-hover:underline-offset-2">
    {#if children}
      {@render children()}
    {/if}
  </span>
  <span>&rarr;</span>
</a>

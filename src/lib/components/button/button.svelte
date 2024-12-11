<script lang="ts">
  import { twMerge as merge } from 'tailwind-merge';
  import { button, type ButtonProps } from './variants';
  const { href, label, intent = 'primary', class: className, ...props }: ButtonProps = $props();
</script>

<a {href} class={merge(button({ intent }), className)} {...props}>
  {label}
</a>

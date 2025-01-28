<script lang="ts">
  import { twMerge as merge } from 'tailwind-merge';
  import { button, type ButtonProps } from './variants';

  const { href, label, intent = 'primary', class: className, ...props }: ButtonProps = $props();

  const safeClassName = typeof className === 'string' ? className : '';
</script>

<a {href} class={merge(button({ intent }), safeClassName)} {...props}>
  {label}
</a>

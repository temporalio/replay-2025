<script lang="ts">
  import { button, type ButtonProps } from './variants';
  const { href, label, intent = 'primary', size, ...props }: ButtonProps = $props();
</script>

<a {href} class={button({ intent, size })} {...props}>
  {label}
</a>

<script lang="ts" module>
  export type BreadcrumbProps = {
    href: string;
    text: string;
  };
</script>

<script lang="ts">
  const { href, text }: BreadcrumbProps = $props();
</script>

<a {href} class="font-pixelated uppercase text-teal">
  &lt; {text}
</a>
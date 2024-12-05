<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { Snippet } from 'svelte';
  import Link from './link.svelte';

  const { Story } = defineMeta({
    title: 'Link',
    component: Link,
    tags: ['autodocs'],
    argTypes: {
      children: { control: 'text' },
    },
    args: {
      children: 'Link' as unknown as Snippet,
    },
  });
</script>

<Story name="Default">
  {#snippet children({ children, ...args })}
    <Link {...args}>{children}</Link>
  {/snippet}
</Story>

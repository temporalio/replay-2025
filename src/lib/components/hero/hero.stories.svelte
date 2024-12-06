<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Hero from './hero.svelte';

  const { Story } = defineMeta({
    title: 'Hero',
    component: Hero,
    tags: ['autodocs'],
  });
</script>

<Story name="Default" />

<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Navigation from './navigation.svelte';

  const { Story } = defineMeta({
    title: 'Navigation',
    component: Navigation,
    tags: ['autodocs'],
  });
</script>

<Story name="Default" />

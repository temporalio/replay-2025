<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Faq from './faq.svelte';

  const { Story } = defineMeta({
    title: 'Faq',
    component: Faq,
    tags: ['autodocs'],
  });
</script>

<Story name="Default" />

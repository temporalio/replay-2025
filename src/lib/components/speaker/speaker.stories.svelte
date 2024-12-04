<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Speaker from './speaker.svelte';

  const { Story } = defineMeta({
    title: 'Speaker',
    component: Speaker,
    tags: ['autodocs'],
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['keynote', 'speaker'],
      },
    },
    args: {
      image:
        'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&h=400&q=80',
      name: 'Speaker Name',
      company: 'Company Name',
      jobTitle: 'Job Title',
    },
  });
</script>

<Story name="Default" />

<Story name="Keynote" args={{ type: 'keynote' }} />

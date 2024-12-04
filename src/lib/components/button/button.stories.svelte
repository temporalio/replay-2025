<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './button.svelte';

  const { Story } = defineMeta({
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      label: { control: 'text' },
      intent: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  });
</script>

<Story name="Primary" args={{ label: 'Button', intent: 'primary' }} />

<Story name="Secondary" args={{ label: 'Button', intent: 'secondary' }} />

<Story name="Tertiary" args={{ label: 'Button', intent: 'tertiary' }} />

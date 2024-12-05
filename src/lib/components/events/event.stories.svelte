<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Event from './event.svelte';

  import Button from '$components/button/button.svelte';
  import Link from '$components/link/link.svelte';

  const { Story } = defineMeta({
    title: 'Event',
    component: Event,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text' },
      time: { control: 'text' },
      description: { control: 'text' },
      class: { control: 'select', options: ['bg-teal', 'bg-green', 'bg-pink'] },
    },
    args: {
      title: 'Event Title',
      time: '12pm – 5pm',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt risus nec tellus maximus, dictum fermentum felis interdum. In rutrum egestas erat finibus imperdiet. Vestibulum velit libero, vehicula at pretium.',
      class: 'bg-teal',
    },
  });
</script>

<Story name="Default" />

<Story name="Event with Call to Action">
  {#snippet children({ title, time, description, class: className })}
    <Event title={title ?? ''} time={time ?? ''} description={description ?? ''} class={className}>
      <Button intent="tertiary" label="Register" />
      <Link href="#">Learn More</Link>
    </Event>
  {/snippet}
</Story>

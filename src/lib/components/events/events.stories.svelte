<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Events from './events.svelte';
  import Event from './event.svelte';
  import Button from '$components/button/button.svelte';
  import Link from '$components/link/link.svelte';

  const { Story } = defineMeta({
    title: 'Events/Events',
    component: Events,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text' },
      badge: { control: 'text' },
      background: { control: 'select', options: ['bg-teal', 'bg-green', 'bg-pink'] },
    },
    args: {
      title: 'Day One',
      badge: '',
      background: 'bg-teal',
    },
  });
</script>

<Story name="One Event">
  {#snippet children({ title = 'Event Title', background = 'bg-teal', ...args })}
    <Events {title} {background} {...args}>
      <Event
        title={title ?? ''}
        time="9:30am - 5pm"
        description="Join us for in-depth workshops led by Temporal experts to deepen your skills. Available in .NET, Go, and Java."
      >
        <Button href="" intent="tertiary" label="Register" />
        <Link href="#">Learn More</Link>
      </Event>
    </Events>
  {/snippet}
</Story>

<Story name="Two Events">
  {#snippet children({ title = 'Event Title', background = 'bg-teal', ...args })}
    <Events {title} {background} {...args}>
      <Event
        title="Workshops"
        time="9am - 5pm"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt risus nec tellus maximus, dictum fermentum felis interdum. In rutrum egestas erat finibus imperdiet. Vestibulum velit libero, vehicula at pretium."
      >
        <Button href="" intent="tertiary" label="Register" />
        <Link href="#">Learn More</Link>
      </Event>
      <Event
        title="Hackathon"
        time="9am - 5pm"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt risus nec tellus maximus, dictum fermentum felis interdum. In rutrum egestas erat finibus imperdiet. Vestibulum velit libero, vehicula at pretium."
      >
        <Button href="" intent="tertiary" label="Register" />
        <Link href="#">Learn More</Link>
      </Event>
    </Events>
  {/snippet}
</Story>

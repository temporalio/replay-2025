<script>
  import links from '$content/links.yaml';
  import About from '$components/about.svelte';
  import { Events, Event } from './events';
  import { Button } from '$components/button';
</script>

<section class="py-20">
  <div class="section flex flex-col gap-8">
    <About />
    <Events title="Day 1" background="bg-green">
      <Event
        time="9am - 5pm"
        title="Workshops"
        description="Join us for in-depth workshops led by Temporal experts to deepen your skills. Available in .NET, Go, and Java."
      >
        <Button href={links.tickets} intent="tertiary" label="Buy a Workshop Ticket" size="full" />
      </Event>
      <Event
        time="10am - 4pm"
        title="Hackathon"
        description="Collaborate with other like-minded devs at the Hackathon to write sample workflows and build cool apps."
      >
        <Button href={links.tickets} intent="tertiary" label="Buy Hackathon Ticket" size="full" />
      </Event>
    </Events>

    <Events title="Day 2 + 3" background="bg-teal">
      <Event
        time="9am - 5pm"
        title="Keynotes + Tech Talks"
        description="Immerse yourself in two days of technical talks from backend software engineering leaders at top organizations. They’ll discuss challenges they’ve encountered and strategies and solutions they’ve employed during their modernization efforts and beyond. "
      >
        <Button intent="tertiary" label="Get Your Ticket" size="full" />
      </Event>
    </Events>

    <Events title="Day 3" background="bg-pink">
      <Event
        time="TBD"
        title="Afterparty"
        description="Whether you’re celebrating a successful Hackathon, reflecting on great talks, or just looking to have a good time with your new friends from Replay, the afterparty is the best place to be! Taking place on March 5th, the afterparty is a chance to live it up, connect, and continue conversations in a lively setting. You also expect food, drinks, and fun alongside your Replay community."
      />
    </Events>
  </div>
</section>

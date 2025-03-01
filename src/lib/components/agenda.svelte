<script>
  import links from '$content/links.yaml';
  import { Events, Event } from './events';
  import { Button } from '$components/button';
</script>

<section class="md:section flex flex-col gap-8 pt-20 lg:pb-20">
  <Events title="Day 1" background="bg-green">
    <Event
      time="9am - 5pm"
      title="Workshops"
      description="Join us for in-depth workshops led by Temporal experts to deepen your skills."
    >
      <Button href={links.tickets} intent="tertiary" label="SOLD OUT" />
    </Event>
    <Event
      time="9:30am - 4pm"
      title="Hackathon"
      description="Collaborate with other like-minded devs at the Hackathon to write sample workflows and build cool apps."
    >
      <Button href={links.tickets} intent="tertiary" label="SOLD OUT" />
    </Event>
  </Events>

  <Events title="Day 2 + 3" background="bg-teal">
    <Event
      time="9am - 5pm"
      title="Keynotes + Tech Talks"
      description="Immerse yourself in two days of technical talks from backend software engineering leaders at top organizations. They’ll discuss challenges they’ve encountered and strategies and solutions they’ve employed during their modernisation efforts and beyond. "
    >
      <Button href={links.tickets} intent="tertiary" label="SOLD OUT" />
    </Event>
  </Events>

  <Events title="Day 3" background="bg-pink">
    <Event
      time="March 5"
      title="Afterparty"
      description="Whether you’re celebrating a successful Hackathon, reflecting on great talks, or just looking to have a good time with your new friends from Replay, the afterparty is the best place to be! Taking place on <span class='font-bold'>Wednesday, March 5th from 6pm - 10pm</span>, the afterparty is a chance to live it up, connect, and continue conversations in a lively setting. You also expect food, drinks, and fun alongside your Replay community. <br/> <br/> 
      <span class='font-bold'>Restaurant:</span> <a href='https://www.drakeandmorgan.co.uk/the-folly/'
        >The Folly by Drake and Morgan</a
      > <br/>   
        <span class='font-bold'>Address:</span>  <a
        href='https://www.google.com/search?sca_esv=115fbc7a5c2d88aa&q=the+folly+address&ludocid=14826282419561904059&sa=X&sqi=2&ved=2ahUKEwiK_qz5lIqLAxXID1kFHdLLF9gQ6BN6BAg1EAI'
        >41 Gracechurch St, City of London, London EC3V 0BT, United Kingdom</a
      > <br/><br/>  The Folly is a 6 min walk from Convene at 22 Bishopsgate. All event attendees are
      welcome to attend."
    />
  </Events>
</section>

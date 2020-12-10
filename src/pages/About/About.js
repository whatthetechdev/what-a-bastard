import React, { useContext } from "react"

import { Hero, Card, WindowWidth } from "components"
import { BastardContext } from "store/Store"
import { Container, Title, LeftColumn, RightColumn } from "./About.style"

const About = () => {
  const [bastards] = useContext(BastardContext)
  const featuredBastard = bastards[1]

  return (
    <div>
      <Hero title="Just another page with Rick & Morty Ipsum" />
      <Container>
        <LeftColumn>
          <Title>About the Software Bastards</Title>
          <p>
            I don&apos;t like it here Morty. I can&apos;t abide bureaucracy. I
            don&apos;t like being told where to go and what to do. I consider it
            a violation. Did you get those seeds all the way up your butt? Holy
            crap, Morty, run! Run for your life, Morty, run! I-I&apos;ve never
            seen that thing before in my life, Morty, I don&apos;t even know
            what the hell it is! We-we gotta get out of here, Morty, it&apos;s
            gonna kill us! We&apos;re gonna die, Morty! We&apos;re gonna die!
            How do you saddle a fart? Oh, yeah! We&apos;re like Luke and Leia!
            ...Uh, except no kissing part. What&apos;s another famous
            brother–sister team?
          </p>
          <p>
            I mean, why would a poptart want to live inside a toaster, Rick? I
            mean, that would be like the scariest place for them to live. You
            know what I mean? Your blood will be my lotion! You can run, but you
            can&apos;t hide bitch! I was just killing some snaked up here like
            everyone else, I guess, and finishing the Christmas lights.
          </p>
          <p>
            Right, Crocubot. So, you&apos;re half cold unfeeling reptile, half
            also cold equally unfeeling machine? I&apos;ll be with Reuben in my
            workshop while you guys are having another day in Phil Collin&apos;s
            proverbial paradise. Don&apos;t even trip about your pants, dawg. We
            got an extra pair right here. We all wanna die, we&apos;re meeseeks!
          </p>
        </LeftColumn>
        <RightColumn>
          <Title>Featured Bastard</Title>
          <Card item={featuredBastard} />
          <WindowWidth />
        </RightColumn>
      </Container>
    </div>
  )
}

export default About

import React from "react"

import { Hero, CardList } from "components"
import { Container, Title } from "./Home.style"

const Home = () => (
  <div>
    <Hero />
    <Container>
      <Title>Latest Bastards</Title>
      <CardList
        items={[
          { id: 1, title: "Edward" },
          { id: 2, title: "Boy" },
          { id: 3, title: "Stijn" },
        ]}
      />
    </Container>
  </div>
)

export default Home

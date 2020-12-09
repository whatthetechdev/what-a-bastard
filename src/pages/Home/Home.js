import React from "react"

import { Hero, BastardList } from "components"
import data from "data/data"
import { Container, Title } from "./Home.style"

const Home = () => (
  <div>
    <Hero />
    <Container>
      <Title>Latest Bastards</Title>
      <BastardList items={data} />
    </Container>
  </div>
)

export default Home

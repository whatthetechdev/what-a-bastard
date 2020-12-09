import React, { useContext } from "react"

import { Hero, BastardList } from "components"
import { BastardContext } from "store/Store"
import { Container, Title } from "./Home.style"

const Home = () => {
  const [bastards] = useContext(BastardContext)

  return (
    <div>
      <Hero />
      <Container>
        <Title>Latest Bastards</Title>
        <BastardList items={bastards} />
      </Container>
    </div>
  )
}

export default Home

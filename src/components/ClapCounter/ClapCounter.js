import React, { useState } from "react"

import clap from "assets/clap.svg"
import { Container, ClapCount, Clapper } from "./ClapCounter.style"

const ClapCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <ClapCount>{count}</ClapCount>
      <Clapper
        src={clap}
        alt=""
        onClick={() => setCount((prevCount) => prevCount + 1)}
      />
    </Container>
  )
}

export default ClapCounter

import React, { useState, useEffect } from "react"

import clap from "assets/clap.svg"
import { Container, ClapCount, Clapper } from "./ClapCounter.style"

const ClapCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("counter changed")
  }, [count])

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

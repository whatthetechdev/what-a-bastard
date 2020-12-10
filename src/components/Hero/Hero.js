import React from "react"
import PropTypes from "prop-types"

import { Container, Title } from "./Hero.style"

const Hero = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Hero

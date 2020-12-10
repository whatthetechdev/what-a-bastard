import React from "react"
import PropTypes from "prop-types"

import { Container, TitleBar, Name, JobTitle, Image } from "./Card.style"
import ClapCounter from "../ClapCounter/ClapCounter"

const Card = ({ item }) => (
  <Container key={item.id}>
    <TitleBar>
      <Name>{item.name}</Name>
      <ClapCounter />
    </TitleBar>
    <JobTitle>{item.jobTitle}</JobTitle>
    <Image src={item.imageUrl} alt="" />
  </Container>
)

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card

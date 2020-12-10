import React from "react"
import PropTypes from "prop-types"

import { Container, Name, JobTitle, Image } from "./Card.style"

const Card = ({ item }) => (
  <Container key={item.id}>
    <Name>{item.name}</Name>
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

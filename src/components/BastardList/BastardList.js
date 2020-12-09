import React from "react"
import PropTypes from "prop-types"

import { Container, Card, Name, JobTitle, Image } from "./BastardList.style"

const BastardList = ({ items }) => (
  <Container>
    {items.map((item) => (
      <Card key={item.id}>
        <Name>{item.name}</Name>
        <JobTitle>{item.jobTitle}</JobTitle>
        <Image src={item.imageUrl} alt="" />
      </Card>
    ))}
  </Container>
)

BastardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default BastardList

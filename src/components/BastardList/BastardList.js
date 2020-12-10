import React from "react"
import PropTypes from "prop-types"

import { Card } from "components"
import Container from "./BastardList.style"

const BastardList = ({ items }) => (
  <Container>
    {items.map((item) => (
      <Card item={item} key={item.id} />
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

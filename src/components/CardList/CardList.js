import React from "react"
import PropTypes from "prop-types"

import { Container, Card, Title, SubTitle } from "./CardList.style"

const CardList = ({ items }) => (
  <Container>
    {items.map((item) => (
      <Card key={item.id}>
        <Title>{item.title}</Title>
        <SubTitle>{item.title}</SubTitle>
      </Card>
    ))}
  </Container>
)

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default CardList

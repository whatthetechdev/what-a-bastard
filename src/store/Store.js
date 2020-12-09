import React, { useState } from "react"
import PropTypes from "prop-types"

import data from "data/data"

export const BastardContext = React.createContext()

const Store = ({ children }) => {
  const [bastards, setBastards] = useState(data)

  return (
    <BastardContext.Provider value={[bastards, setBastards]}>
      {children}
    </BastardContext.Provider>
  )
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Store

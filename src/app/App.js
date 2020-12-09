import React from "react"
import { Reset } from "styled-reset"

import { Header } from "components"

const App = () => (
  <>
    <Reset />
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  </>
)

export default App

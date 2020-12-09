import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Header } from "components"
import { Home, MeetTheBastards } from "pages"
import Store from "store/Store"
import AppContainer from "./App.style"

const App = () => (
  <Router>
    <Store>
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/meet-the-bastards" component={MeetTheBastards} />
        </Switch>
      </AppContainer>
    </Store>
  </Router>
)

export default App

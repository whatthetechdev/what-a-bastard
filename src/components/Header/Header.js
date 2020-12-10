import React from "react"
import { Logo } from "components"

import {
  SiteHeader,
  NavBar,
  Nav,
  NavList,
  NavItem,
  NavLink,
} from "./Header.style"

const Header = () => (
  <SiteHeader>
    <NavBar>
      <Logo />
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </NavBar>
  </SiteHeader>
)

export default Header

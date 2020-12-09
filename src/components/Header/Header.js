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
            <NavLink to="/meet-the-bastards">Meet the Bastards</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </NavBar>
  </SiteHeader>
)

export default Header

import React from "react"
import { Logo } from "components"

import { Nav, NavList, NavItem, NavLink, SiteHeader } from "./Header.style"

const Header = () => (
  <SiteHeader>
    <Logo />
    <h1>What a Bastard!</h1>
    <Nav>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Meet the Bastards</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  </SiteHeader>
)

export default Header

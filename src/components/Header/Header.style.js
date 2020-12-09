import styled from "styled-components"

export const SiteHeader = styled.header`
  background-color: #000000;
  color: #ffffff;
  padding: 24px 48px;
  min-height: 60vh;
`

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nav = styled.nav`
  background-color: #000000;
`

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const NavItem = styled.li`
  display: inline-block;
  padding: 0 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`

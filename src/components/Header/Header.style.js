import styled from "styled-components"
import { Link } from "react-router-dom"

export const SiteHeader = styled.header`
  background-color: #000000;
  color: #ffffff;
  padding: 24px 48px;
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
  margin: 0 0 0 1rem;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  border: 1px solid #d4b47c;
  padding: 18px 24px;
`

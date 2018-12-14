import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const TopNavWrapper = {
  borderRadius: '0px',
  backgroundColor: 'white',
  border: 'none',
  height: '80px'
}
const NavHeader = { marginRight: '2em', width: '0em' }
const NavBrand = { color: '#000000' }

function NavBar() {
  return (
    <header>
      <Navbar style={TopNavWrapper} collapseOnSelect>
        <Nav style={{ float: 'right' }}>
          <NavItem> Some Option</NavItem>
        </Nav>
        <Navbar.Header style={NavHeader}>
          <Navbar.Brand>
              TWC
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    </header>
  )
}

export default NavBar

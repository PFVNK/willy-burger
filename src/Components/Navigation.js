import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom'

import '../App.css'



function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='navbar-container'>
      <Navbar className='navbar-dark' expand="md">
        <NavbarBrand className='navbar-title' href="/">Willy Burger</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/burgers'>Burgers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/gettous'>Get To Us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Online Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to='/menu'>
                  Willy-Burger #1 - Beaumont
                </DropdownItem>
                <DropdownItem tag={Link} to='/menu'>
                  Willy-Burger #2 - Katy
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  )
}


export default Navigation
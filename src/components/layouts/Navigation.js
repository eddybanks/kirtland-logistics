import React from 'react'
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
  DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const navigationList = [
  // { id: 1, name: 'Kirtland Airshow Logistics', path: '/' },
  { id: 2, name: 'Summary', path: '/summary' },
  { id: 3, name: 'Zones', path: '/zones' }
]

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Kirtland Airshow Logistics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navigationList.map( navitem => (
                <NavItem>
                  <Link to={navitem.path}><NavLink>{navitem.name}</NavLink></Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation
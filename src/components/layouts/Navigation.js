import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap'
import { Link } from 'react-router-dom'

const navigationList = [
  // { id: 1, name: 'Kirtland Airshow Logistics', path: '/' },
  { id: 2, name: 'Summary', path: '/summary' },
  { id: 3, name: 'Zones', path: '/zones' },
  { id: 4, name: 'Tracking', path: '/tracking' }
]

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.showTime = this.showTime.bind(this)
    this.state = {
      isOpen: false,
      time: '',
      date: ''
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  showTime() {
    let date = new Date()
    this.setState({
      time: date.toLocaleTimeString(),
      date: date.toString()
    })
    setTimeout(this.showTime, 1000)
  }

  componentWillMount() {
    this.showTime()
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Kirtland Airshow Logistics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink data-toggle="tooltip" data-placement="bottom" title={this.state.date}>{this.state.time}</NavLink></NavItem>
              {navigationList.map( navitem => (
                <NavItem key={navitem.id}>
                  <NavLink tag={Link} to={navitem.path}>{navitem.name}</NavLink>
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
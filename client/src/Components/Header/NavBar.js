import React, { Component } from "react";
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
  DropdownItem
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { Menu, Button, Container, Grid, Image } from "semantic-ui-react";
import iconImage from "../../Images/Icon.PNG";

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div style={{ marginBottom: "40px" }}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home">
            <Image avatar src={iconImage} alt="logo" />
            Jonathan J. Holloway
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Experience
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><Link to = "/projects">Developer</Link></DropdownItem>
                  <DropdownItem><Link to = "/manager">Project Manager</Link></DropdownItem>
                  <DropdownItem><Link to = "/lectures">Teacher</Link></DropdownItem>
                  <DropdownItem><Link to = "/education">Education</Link></DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

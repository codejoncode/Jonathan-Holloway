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
// import { NavLink, Link, withRouter } from "react-router-dom";
import { Menu, Button, Container, Grid, Image } from "semantic-ui-react";
import iconImage from "../../Images/Icon.PNG";
// class NavBar extends Component {
//   render() {
//     return (

//         <Menu>
//         <Container>
//           <Menu.Item as={Link} to="/home" header>
//             <img src={iconImage} alt="logo" />
//           </Menu.Item>

//           <Menu.Item as={Link} to="/resume">
//             Resume
//           </Menu.Item>

//           <Menu.Item as={Link} to="/projects">
//             Developer
//           </Menu.Item>

//           <Menu.Item as={Link} to="lectures">
//             Teacher
//           </Menu.Item>
//           <Menu.Item as={Link} to="manager">
//             Project Manager
//           </Menu.Item>

//           <Menu.Item>
//             <Button
//               as={Link}
//               to={"/interview"}
//             //   floated="right"
//               positive
//               inverted
//               content="Interview"
//             />
//           </Menu.Item>
//           </Container>
//         </Menu>

//     );
//   }
// }
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
          <NavbarBrand href="/">
            <Image avatar src={iconImage} alt="logo" />
            Jonathan J. Holloway
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Experience
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Developer</DropdownItem>
                  <DropdownItem>Project Manager</DropdownItem>
                  <DropdownItem>Teacher</DropdownItem>
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

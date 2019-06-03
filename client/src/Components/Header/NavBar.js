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
import { Link } from "react-router-dom";
import { Image, Menu } from "semantic-ui-react";
import iconImage from "../../Images/Icon.PNG";

import {darkBlack} from "../../Helpers/Colors/colors"

class NavBar extends Component {
  state = {
    isOpen: false
  };

  componentWillMount () {
    
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      // <div style={{ marginBottom: "40px" }}>
      //   <Navbar color="light" light expand="md">
      //     <NavbarBrand href="/home">
      //       <Image avatar src={iconImage} alt="logo" />
      //       Jonathan J. Holloway
      //     </NavbarBrand>
      //     <NavbarToggler onClick={this.toggle} />
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="ml-auto" navbar>
      //         <NavItem>
      //           <NavLink href="/resume">Resume</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
      //         </NavItem>
      //         <UncontrolledDropdown nav inNavbar>
      //           <DropdownToggle nav caret>
      //             Experience
      //           </DropdownToggle>
      //           <DropdownMenu right>
      //             <DropdownItem><Link to = "/projects">Developer</Link></DropdownItem>
      //             <DropdownItem><Link to = "/manager">Project Manager</Link></DropdownItem>
      //             <DropdownItem><Link to = "/lectures">Teacher</Link></DropdownItem>
      //             <DropdownItem><Link to = "/education">Education</Link></DropdownItem>
      //             <DropdownItem divider />
      //           </DropdownMenu>
      //         </UncontrolledDropdown>
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>
      <Menu color = {darkBlack} fluid stackable inverted>
        <Menu borderless fluid stackable inverted>
        <Menu.Item><Image avatar src={iconImage} alt="logo" /></Menu.Item>
        
       <Menu.Item>Jonathan J. Holloway</Menu.Item>

        </Menu>
        <Menu.Item
          name='Resume'
          active={activeItem === 'Resume'}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item name='Projects' active={activeItem === 'Projects'} onClick={this.handleItemClick}>
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Menu } from "semantic-ui-react";
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
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu  fluid stackable  id ="navTagsBlue" style = {{background: "#0B0C10", marginBottom: "20px", border: `1px solid #45A29E`}}>
        <Menu borderless fluid stackable  style = {{background: "#0B0C10"}} >
        <Menu.Item as = {Link} to = "/" ><Image avatar src={iconImage} alt="logo" /></Menu.Item>
        
       <Menu.Item id = "lighterBlue" as = {Link} to = "/">Jonathan J. Holloway</Menu.Item>

        </Menu>
        <Menu.Item
          as = {Link}
          to = "/resume"
          name='Resume'
          active={activeItem === 'Resume'}
          onClick={this.handleItemClick}
        >
          Resume
        </Menu.Item>

        <Menu.Item as = {Link} to = "/projects" name='Projects' active={activeItem === 'Projects'} onClick={this.handleItemClick}>
          Projects
        </Menu.Item>
        <Menu.Item as = {Link} to = "/lectures" name='Lectures' active={activeItem === 'Lectures'} onClick={this.handleItemClick}>Lectures</Menu.Item>
        <Menu.Item as = {Link} to = "/blog" name='Blog' active={activeItem === 'Blog'} onClick={this.handleItemClick}>Blog</Menu.Item>

        <Menu.Item
          as = {Link}
          to = "/contact"
          name='contact'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;

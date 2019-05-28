import React, { Component } from 'react'
import { NavLink, Link, withRouter } from "react-router-dom";
import { Menu, Button, Container } from "semantic-ui-react";
import iconImage from '../../Images/Icon.PNG'
class NavBar extends Component {
    render() {
        return (
            <Menu inverted fixed="top">
              <Container>
                  <Menu.Item as={Link} to="/" header>
                    <img src = {iconImage} alt="logo"/>
                  </Menu.Item>
                  <Menu.Item as={NavLink} to="/resume">Resume</Menu.Item>
                  <Menu.Item as={NavLink} to="/projects">Projects</Menu.Item>
                  <Menu.Item as={NavLink} to="lectures">Lectures</Menu.Item>
                  <Menu.Item>
                      <Button 
                      floated = "right"
                      positive
                      inverted
                      content = "Set Up an Interview"
                      />
                  </Menu.Item>
              </Container>
            </Menu>
        )
    }
}
export default NavBar;
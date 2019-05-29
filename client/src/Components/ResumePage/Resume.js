import React, { Component } from "react";
import { Grid, Header, Divider, Icon, Item, Segment } from "semantic-ui-react";
import {Link} from "react-router-dom"; 
class Resume extends Component {
  render() {
    return (
      <Grid>
    
        <Grid.Column width={5}>
          <Segment>
            <Header as="h1">Jonathan J. Holloway</Header>
            <Header as="h3">Full Stack Engineer</Header>
            <Divider />
            <Header as="h2">CONTACT</Header>
            <Item as ={Link} to = "www.linkedin.com/in/jonathanjholloway">www.linkedin.com/in/jonathanjholloway</Item>
            <Item as = {Link} to = "https://github.com/codejoncode">https://github.com/codejoncode</Item>
            <Item>708-465-2230</Item>
            <Item>jonathanjamelholloway@gmail.com</Item>
            <Item>Crown Point, IN, USA</Item>
          </Segment>
        </Grid.Column>
        <Grid.Column width={11}>
          <Header as="h2">Summary</Header>
          <p>
            Team player software engineer with a can-do attitude, phenomenal
            time management skills and a strong user focus. An Experienced
            developer working with others on one part of an application and
            another team working on a different part of an application.{" "}
          </p>
          <Header as="h2">PROJECTS</Header>
          <Header as="h3">Symposium -</Header> <span></span>
          <p>Symposium is a reddit/slack like forum where likeminded users can share ideas. </p>
          <Header as="h3">Lambda Treasure Hunt - </Header> <span></span>
          <p>A treasure hunt game showcasing the ability to find the shortest path using breadth first search.</p>
          <Header as="h3">Note App - </Header> <span></span>
          <p>A tool for creating notes, saving notes and inspiring creativity. </p>
          <Header as = "h3">Conway's Life</Header> <span></span>
          <p>Conway’s game of life – cellular automation.</p>
          <Header>EXPERIENCE</Header>
          <Header as="h3">Symposium- March 2019 - April 2019</Header>
          <ul>
              <li>5-week project where I worked with 4 other developers on an existing codebase to add functionality and features. </li>
              <li>Continuous deployment, test driven development and git workflow</li>
              <li>React/Redux frontend and PostgreSQL on the backend. </li>
              <li>I implemented the backend and frontend for the follow a user feature. I also implemented the functionality for editing a profile. </li>
          </ul>
        </Grid.Column>
      </Grid>
    );
  }
}
export default Resume;

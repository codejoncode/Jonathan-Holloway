import React, { Component } from "react";
import {
  Grid,
  Header,
  Divider,
  Icon,
  Item,
  Segment,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";
class Resume extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
              <br/>
            <Header as="h1">Jonathan J. Holloway</Header>
            <Header as="h3">Full Stack Engineer</Header>

            <Header as="h2">CONTACT</Header>
            <Item as={Link} to="www.linkedin.com/in/jonathanjholloway">
              www.linkedin.com/in/jonathanjholloway
            </Item>
            <br />
            <Item as={Link} to="https://github.com/codejoncode">
              https://github.com/codejoncode
            </Item>
            <Item>708-465-2230</Item>
            <Item>jonathanjamelholloway@gmail.com</Item>
            <Item>Crown Point, IN, USA</Item>
            <Message>
              <Message.Header style={{ textAlign: "left" }}>
                TECHNICAL SKILLS
              </Message.Header>
              <Message.List>
                <Message.Item>CSS/LESS</Message.Item>
                <Message.Item>HTML5</Message.Item>
                <Message.Item>JAVASCRIPT</Message.Item>
                <Message.Item>PYTHON</Message.Item>
                <Message.Item>SQL</Message.Item>
                <Message.Item>POSTGRESQL</Message.Item>
                <Message.Item>C</Message.Item>
                <Message.Item>NODE</Message.Item>
                <Message.Item>REST API</Message.Item>
                <Message.Item>EXPRESS</Message.Item>
                <Message.Item>REACT/REDUX</Message.Item>
                <Message.Item>DJANGO</Message.Item>
                <Message.Item>STYLED COMPONENTS</Message.Item>
                <Message.Item>FIREBASE</Message.Item>
                <Message.Item>GOOGLE CLOUD FUNCTIONS</Message.Item>
                <Message.Item>SEMANTIC UI</Message.Item>
              </Message.List>
            </Message>

            <Header as="h2" />
            <Message>
              <Message.Header style={{ textAlign: "left" }}>
                EDUCATION
              </Message.Header>
                  <Header as="h5" style={{ textAlign: "left" }}>
                    Lambda School Academy of Computer Science and Web
                    Development June 2018 to April 2019.
                  </Header>
                  
                <Message.List>
                  <Message.Item>Computer Science & Software Engineering academy providing
                    immersive hands-on curriculum with a focus on computer
                    science and web development.</Message.Item>
                  <Message.Item>Utilized agile software development and Git workflow on all
                projects.</Message.Item>
                  <Message.Item>Hands on experience with client and server testing.</Message.Item>
                  <Message.Item>Test Driven Development</Message.Item>
                  <Message.Item>Building and Integrating RESTFUL API’s</Message.Item>
                </Message.List>
            </Message>
        </Grid.Column>
        <Grid.Column width={8}>
              <br/>
            <Header as="h2">Summary</Header>
            <p>
              Team player software engineer with a can-do attitude, phenomenal
              time management skills and a strong user focus. An Experienced
              developer working with others on one part of an application and
              another team working on a different part of an application.{" "}
            </p>
            <Header as="h2">PROJECTS</Header>
            <Header as="h3">Symposium -</Header> <span />
            <p>
              Symposium is a reddit/slack like forum where likeminded users can
              share ideas.{" "}
            </p>
            <Header as="h3">Lambda Treasure Hunt - </Header> <span />
            <p>
              A treasure hunt game showcasing the ability to find the shortest
              path using breadth first search.
            </p>
            <Header as="h3">Note App - </Header> <span />
            <p>
              A tool for creating notes, saving notes and inspiring creativity.{" "}
            </p>
            <Header as="h3">Conway's Life</Header> <span />
            <p>Conway’s game of life – cellular automation.</p>
            <Header>EXPERIENCE</Header>
            <Header as="h3">Symposium- March 2019 - April 2019</Header>
            <ul>
              <li>
                5-week project where I worked with 4 other developers on an
                existing codebase to add functionality and features.{" "}
              </li>
              <li>
                Continuous deployment, test driven development and git workflow
              </li>
              <li>React/Redux frontend and PostgreSQL on the backend. </li>
              <li>
                I implemented the backend and frontend for the follow a user
                feature. I also implemented the functionality for editing a
                profile.{" "}
              </li>
            </ul>
            <Header as="h3">
              Lambda School of Computer Science January 2019 to March 2019 -
              Teaching Assistant
            </Header>
            <ul>
              <li>
                I perform live guided demos to assist with learning the computer
                science material which consisted of data structures and
                algorithms, Python, and the C programming language. The largest
                group featured 17 students. I also conduct code reviews and
                assist students with their assignments and projects from
                debugging to providing feedback on best practices.{" "}
                <a
                  href="https://codejoncode.github.io/hashtable-guided-project-app/"
                  target="_blank"
                >
                  https://codejoncode.github.io/hashtable-guided-project-app/
                </a>{" "}
                is a react application I built to help discus hash tables.{" "}
              </li>
              <li>Accepted a role as Project Manager April 2019 to current.</li>
            </ul>
        </Grid.Column>
      </Grid>
    );
  }
}
export default Resume;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Header,
  Segment,
  Item,
  Icon,
  Card,
  List,
  Container,
  Image,
  Input,
  Label,
  Form
} from "semantic-ui-react";
import contactImage from "../Images/footer picture.PNG";

class Contact extends Component {
  render() {
    const { lighterBlue, grey } = this.props;
    return (
      <Container>
        <Image centered size="medium" src={contactImage} />
        <Header style={{ color: "white" }} textAlign="center">
          Currently looking for work as a Software Engineer, Full Stack
          Developer Frontend or Backend Engineer
        </Header>
        <Header style={{ color: "white" }} textAlign="center">
          View my <Link to="/resume">Resume</Link> and my{" "}
          <Link to="/projects">Projects</Link>
        </Header>
        <Grid columns={1}>
          <Grid.Row>
            <br />
            <Grid.Column>
              <Form inverted size="huge">
                <Form.Group widths="equal">
                  <Form.Field
                    required
                    placeholder="name"
                    label="Name"
                    control="input"
                  />
                  <Form.Field
                    required
                    placeholder="company"
                    label="Company"
                    control="input"
                  />
                  <Form.Field
                    required
                    placeholder="Email"
                    label="Email"
                    control="input"
                  />
                </Form.Group>
                <Form.Field
                  required
                  placeholder="Enter your message"
                  control="textarea"
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default Contact;

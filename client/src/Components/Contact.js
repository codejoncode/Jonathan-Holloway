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
  Form, 
  Message
} from "semantic-ui-react";
import contactImage from "../Images/footer picture.PNG";

class Contact extends Component {
  render() {
    const { lighterBlue, grey, company, name, email, text, handleSubmit, handleChange } = this.props;
    return (
      <Container>
        <Image centered size="medium" src={contactImage} />
        <Header style={{ color: "white" }} textAlign="center">
          Currently looking for work as a Software Engineer, Full Stack
          Developer Frontend or Backend Engineer
        </Header>
        <Header style={{ color: "white" }} textAlign="center">
          Click here to view my <Link to="/resume">Resume.</Link> Click here to view my{" "}
          <Link to="/projects">Projects.</Link>
        </Header>
        <Grid columns={1}>
          <Grid.Row>
            <br />
            <Grid.Column>
              <Form inverted size="huge" onSubmit ={handleSubmit}>
                <Form.Group widths="equal">
                  <Form.Field
                    required
                    placeholder="name"
                    label="Name"
                    value = {name}
                    name = 'name'
                    control="input"
                    onChange = {handleChange}
                  />
                  <Form.Field
                    required
                    placeholder="company"
                    value = {company}
                    name = 'company'
                    label="Company"
                    control="input"
                    onChange = {handleChange}
                  />
                  <Form.Field
                    required
                    placeholder="Email"
                    value = {email}
                    name = 'email'
                    label="Email"
                    control="input"
                    onChange = {handleChange}
                  />
                </Form.Group>
                <Form.Field
                  required
                  placeholder="Enter your message"
                  value = {text}
                  name = 'text'
                  control="textarea"
                  onChange = {handleChange}
                />
                <Message 
                warning
                header="Could you check something!"
                list = {[
                    'That email has akfjas;dfjkadksfj'
                ]}
                />
                <Message 
                success 
                header="Email Sent" 
                content = "Your email has been sent to Jonathan. Thank you!"
                />
                <Form.Button content = 'Submit' />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default Contact;

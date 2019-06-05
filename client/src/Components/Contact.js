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
  Message,
  TextArea
} from "semantic-ui-react";
import contactImage from "../Images/footer picture.PNG";

class Contact extends Component {
  state = { 
    list : [], 
    name: '', 
    email: '', 
    company: '', 
    text : '',
    submittedName: '', 
    submittedEmail: '',
    submittedText: '',
    submittedCompany: '',
  }
  handleChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    const {name, email, text, company } = this.state; 
    console.log(name, email, text, company)

    this.setState({ submittedName: name, submittedEmail: email, submittedText: text, submittedCompany: company});
  }

  render() {
    const { lighterBlue, grey,  } = this.props;
    const {company, name, email, text, list} = this.state;
    
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
              <Form inverted size="huge" onSubmit ={this.handleSubmit}>
                <Form.Group widths="equal">
                  <Form.Field
                    required
                    placeholder="name"
                    label="Name"
                    name = 'name'
                    value = {name}
                    onChange = {this.handleChange}
                    control={Input}
                  />
                  <Form.Input
                    required
                    placeholder="company"
                    name = 'company'
                    label="Company"
                    control={Input}
                    value = {company}
                    onChange = {this.handleChange}
                  />
                  <Form.Input
                    required
                    placeholder="Email"
                    name = 'email'
                    label="Email"
                    control={Input}
                    value = {email}
                    onChange = {this.handleChange}
                  />
                </Form.Group>
                <Form.Field
                  required
                  placeholder="Enter your message"
                  name = 'text'
                  control={TextArea}
                  value = {text}
                  onChange = {this.handleChange}
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

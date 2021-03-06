import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import {
  Grid,
  Header,
  Container,
  Image,
  Input,
  Form,
  TextArea
} from "semantic-ui-react";
import contactImage from "../Images/footer picture.PNG";
import { sendEmail } from "../Store/Actions/emailActions";

const actions = {
  sendEmail
};

class Contact extends Component {
  state = {
    list: [],
    name: "",
    email: "",
    company: "",
    message: "",
    error: ""
  };

  validateEmail = email => {
    const lowerCase = email.toLowerCase();
    var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return re.test(lowerCase);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { name, email, message, company } = this.state;
    console.log(name, email, message, company);
    if (name.length < 3) {
      this.setState({ error: "Please enter a valid name" });
      toastr.error(
        "Name Length",
        "Please enter a valid name first and last please"
      );
    } else if (message.length < 15) {
      this.setState({ error: "Your message seems a bit slim." });
      toastr.error("Message Length", "Your message seems a bit slim.");
    } else if (company.length < 4) {
      this.setState({ error: "Please enter your company name" });
      toastr.error(
        "Company Length seems weird",
        "Please enter your company name"
      );
    } else if (!this.validateEmail(email)) {
      this.setState({ error: "Please enter a valid email." });
      toastr.error("Email appears fake", "Please enter a valid email.");
    } else {
      const body = {
        name,
        email,
        message,
        company
      };

      this.props.sendEmail(body);
      this.setState({ name: "", email: "", message: "", company: "" });
    }
  };

  render() {
    const { company, name, email, message } = this.state;
    return (
      <Container>
        <Image centered size="medium" src={contactImage} />
        <Header style={{ color: "white" }} textAlign="center">
          Currently looking for work as a Software Engineer, Full Stack
          Developer Frontend or Backend Engineer
        </Header>
        <Header style={{ color: "white" }} textAlign="center">
          Click here to view my <Link to="/resume">Resume.</Link> Click here to
          view my <Link to="/projects">Projects.</Link>
        </Header>
        <Grid columns={1}>
          <Grid.Row>
            <br />
            <Grid.Column>
              <Form inverted size="huge" onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                  <Form.Field
                    required
                    placeholder="name"
                    label="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    control={Input}
                  />
                  <Form.Input
                    required
                    placeholder="company"
                    name="company"
                    label="Company"
                    control={Input}
                    value={company}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    required
                    placeholder="Email"
                    name="email"
                    label="Email"
                    control={Input}
                    value={email}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Field
                  required
                  placeholder="Enter your message"
                  name="message"
                  control={TextArea}
                  value={message}
                  onChange={this.handleChange}
                />
                <label>{this.state.error}</label>
                <Form.Button content="Submit" />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default connect(
  null,
  actions
)(Contact);

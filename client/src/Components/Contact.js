import React, { Component } from "react";
import { connect } from "react-redux";
import { toastr} from "react-redux-toastr";
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
  TextArea,
  Popup
} from "semantic-ui-react";
import contactImage from "../Images/footer picture.PNG";
import { sendEmail} from "../Store/Actions/emailActions";
import { tsConstructSignatureDeclaration } from "@babel/types";

const actions = {
  sendEmail,
}
const timeoutLength = 2500; 

class Contact extends Component {
  state = { 
    list : [], 
    name: '', 
    email: '', 
    company: '', 
    message : '',
    error : ""
  }
  

  validateEmail = (email) => {
    const lowerCase = email.toLowerCase(); 
    var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return re.test(lowerCase);
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    const {name, email, message, company } = this.state; 
    console.log(name, email, message, company)
    if (name.length < 3) {
      // toastr.error("Oops", "Please enter a valid name")
      this.setState({error: "Please enter a valid name"}, this.handleOpen())
    } else if (message.length < 15 ) {
      // toastr.error("Oops!", "You do not have a message." )
      this.setState({error: "Your message seems a bit slim."}, this.handleOpen())
    } else if ((company.length < 4)){
      // toastr.error("Oops!", "Please enter your company name")
      this.setState({error: "Please enter your company name"}, this.handleOpen())
    } else if (!(this.validateEmail(email))) {
      // toastr.error("Oops!", "Please enter a valid email.")
      this.setState({error: "Please enter a valid email."}, this.handleOpen())
    } else {
        const body = {
          name, email, message, company
        }

        this.props.sendEmail(body); 
        this.setState({ name: "", email: "",  message: "", company: "",});

    }
  }

  render() {
    const {company, name, email, message} = this.state;
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
                  name = 'message'
                  control={TextArea}
                  value = {message}
                  onChange = {this.handleChange}
                />
                <label>{this.state.error}</label>
                <Form.Button content = 'Submit' />
              </Form>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default connect(null, actions)(Contact);

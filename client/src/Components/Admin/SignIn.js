import React, { Component } from "react";
import { Form, Button, Grid, Container, Input } from "semantic-ui-react";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    isAuthenticated: false
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    /*this is where I call an action  */
    const { username, password } = this.state;
  };

  render() {
    const {username, password} = this.state; 
    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Form inverted>
                <Form.Field
                    required
                    placeholder="Enter username"
                    label="Username"
                    name = 'username'
                    value = {username}
                    onChange = {this.handleChange}
                    control={Input}
                  />

                  <Form.Field
                    required
                    placeholder="Enter username"
                    label="Password"
                    name = 'password'
                    value = {password}
                    onChange = {this.handleChange}
                    type= "password"
                    control={Input}
                  />

                <Button type="submit">Register</Button>
                <Button type="submit">Login</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default SignIn;

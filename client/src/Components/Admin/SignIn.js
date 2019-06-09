import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Grid, Container, Input, Header } from "semantic-ui-react";
import { login } from '../../Store/Actions/loginActions';

const actions = {
  login, 
}
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

  handleSubmit = async () => {
    /*this is where I call an action  */
    const { username, password } = this.state;
    if (username.length > 11 && password.length > 8 ){
      /* requriements are met okay to proceed */
      const body = { username, password}
      await this.props.login(body); 
      this.props.history.push("/admin/blogs")

    }
  };

  render() {
    const {username, password} = this.state; 
    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row style= {{marginTop: "20%", marginBottom: "20%"}}>
            <Grid.Column>
              <Form inverted onSubmit ={this.handleSubmit}>
               <Header as={"h1"} style = {{color: "white"}} textAlign = "center">Admin Login</Header>
                <Form.Field
                    required
                    placeholder="Enter username"
                    label="Username"
                    name = 'username'
                    value = {username}
                    onChange = {this.handleChange}
                    control={Input}
                    icon = 'user'
                    iconPosition = 'left'
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
                    icon = 'user'
                    iconPosition = 'left'
                  />

                <Button type="submit">Login</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default connect(null, actions)(SignIn);

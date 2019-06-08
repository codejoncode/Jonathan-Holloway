import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    isAuthenticated: false,
  };

  handleChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  };

  handleSubmit = () => {
    /*this is where I call an action  */
    const { username, password} = this.state; 
  }

  render() {
    return (
     <Form inverted>
       <Form.Field>
        <label>Username</label>
        <input placeholder = "username" onChange = {this.handleChange}/>
       </Form.Field>

       <Form.Field>
         <label>Password</label>
         <input type="password" onChange = {this.handleChange}/>

       </Form.Field>

       <Button type='submit'>Register</Button>
       <Button type ='submit'>Login</Button>
     </Form>
    );
  }
}
export default SignIn;

import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    isAuthenticated: false,
  };
  render() {
    return (
     <Form>
       <Form.Field>
        <label>Username</label>
        <input placeholder = "username" />
       </Form.Field>

       <Form.Field>
         <lable>Password</lable>
         <input type="password" />

       </Form.Field>

       <Button type='submit'>Submit</Button>
     </Form>
    );
  }
}
export default SignIn;

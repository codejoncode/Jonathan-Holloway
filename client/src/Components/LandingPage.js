import React, { Component } from "react";
import { Button, Jumbotron, Container } from "reactstrap";
import styled from "styled-components";

const DivWithBackground = styled.div`
  background-color: black;
`;

class LandingPage extends Component {
  render() {
    return (
      <DivWithBackground>
        <h1 className="display-3">Jonathan Holloway</h1>
        <h2>Full Stack Web Developer</h2>
        
      </DivWithBackground>
    );
  }
}

export default LandingPage;

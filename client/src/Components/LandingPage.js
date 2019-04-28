import React, { Component } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const DivWithBackground = styled.div`
  background-color: ;
`;

class LandingPage extends Component {
  render() {
    return (
      <DivWithBackground>
        <p>
          Team player software engineer with a can-do attitude, phenomenal time
          management skills and a strong user focus. Experience developer
          working with others on one part of an application and another team
          working on a different part of an application. Experienced project
          manager for two teams working on two different projects, successfully
          meeting all deadlines.
        </p>
        <Button>View More</Button>
      </DivWithBackground>
    );
  }
}

export default LandingPage;

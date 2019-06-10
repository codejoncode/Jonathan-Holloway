import React, { Component } from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import HomePageHeader from "./Header/HomePageHeader";

class LandingPage extends Component {
  continueToHomePage = () => () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <Container>
        <HomePageHeader />
      </Container>
    );
  }
}

export default withRouter(LandingPage);

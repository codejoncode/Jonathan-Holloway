import React, { Component } from "react";
import { Button, Jumbotron, Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import landingPage from "../Images/landing1.jpg";

const ResponsiveImage = styled.img.attrs({
  src: landingPage
})`
  width: 100%;
  height: 75%;
  &:hover {
    cursor : pointer;
  }
`;

const ResponsiveButton = styled.button `
     display: block;
     width: 100%
     color: #fff;
     background-color : black; 
     border-color : black; 
     font-weight: 400;
     text-align: center; 
     vertical-align: middle;
     user-select: none;
     margin-top: 10px;
     &:hover {
         color: black;
         background-color: white;
     }
`;


class LandingPage extends Component {
  
  continueToHomePage = () => () => {
      this.props.history.push("/home");
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Row>
          <Col>
          <ResponsiveImage onClick = {this.continueToHomePage()}/>
            <ResponsiveButton className = "button button-block, button-secondary" onClick = {this.continueToHomePage()}>Click To Continue</ResponsiveButton>
          </Col>
           
        </Row>
        
        
      </Container>
    );
  }
}

export default withRouter(LandingPage);

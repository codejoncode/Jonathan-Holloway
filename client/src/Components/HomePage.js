import React, { Component } from "react";
import { Button, Jumbotron, Container, Col, Row } from "reactstrap";
import styled from "styled-components";
import NavBar from "./NavBar";

const DivWithBackground = styled.div`
  width: 100%;
`;
const IconBig = styled.i``;
const Card = styled.div``;

class HomePage extends Component {
  render() {
    return (
      <DivWithBackground>
        <NavBar />
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Jonathan Holloway</h1>
            <p className="lead">
              Team player software engineer with a can-do attitude, phenomenal
              time management skills and a strong user focus. Experience
              developer working with others on one part of an application and
              another team working on a different part of an application.
              Experienced project manager for two teams working on two different
              projects, successfully meeting all deadlines.
            </p>
          </Container>
        </Jumbotron>
        <Row>
          <Col>
            <Card>
              <IconBig className="far fa-clock fa-7x" />
            </Card>
          </Col>
          <Col>
            <Card>
              <IconBig className="fas fa-tasks fa-7x" />
            </Card>
          </Col>
          <Col>
            <Card>
              <IconBig className = ""/>
            </Card>
          </Col>
        </Row>
      </DivWithBackground>
    );
  }
}

export default HomePage;

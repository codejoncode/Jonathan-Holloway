import React, { Component } from "react";
import {
  Grid,
  Header,
  Segment,
  Item,
  Icon,
  Card,
  List,
  Container,
  Image
} from "semantic-ui-react";

import profilePic from ".././../Images/profile pic.PNG";
import { darkBlack } from "../../Helpers/Colors/colors";
import HeaderCard from "./HeaderCard";
class HomePageHeader extends Component {
  state = {
    FRONTEND: [
      "React/Redux",
      "JavaScript",
      "Node.js",
      "HTML/CSS/Less",
      "Styled Components"
    ],
    BACKEND: ["Python/Django", "Firebase", "PostgresSQL", "Sqlite3", "Express"],
    OTHERS: [
      "C Programming",
      "Unit Testing",
      "Project Management",
      "Coding Teaching Assistant",
      "Customer Service Professional"
    ]
  };
  render() {
    const { frontend, backend, others } = this.state;
    const groups = ["FRONTEND", "BACKEND", "OTHERS"];
    return (
      <Container>
        <Grid.Column width={16}>
          <Segment style={{ backgroundColor: darkBlack }} stacked>
            <Item.Group>
              <Image src={profilePic} centered />
              <Item style={{ textAlign: "center" }}>
                <Item.Content verticalAlign="bottom">
                  <Header id="lighterBlue" as="h1">
                    Jonathan J. Holloway
                  </Header>
                  <br />
                  <Header id="lighterBlue" as="h3">
                    Software Engineer
                  </Header>
                  <br />
                  <Header id="lighterBlue" as="h5">
                    Crown Point, IN
                  </Header>

                  <br />
                  <a
                    href="https://github.com/codejoncode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jonathanjholloway/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="linkedin" />
                  </a>

                  <a
                    href="https://twitter.com/Jonathanjamelh1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="twitter" />
                  </a>
                  <Item.Description style={{ color: "#66FCF1" }}>
                    I am a Software developer with a passion for getting
                    results. I love seeing something grow and come alive or even
                    expanding something that already exists. Coding is a life
                    change for me but I come from a background of customer
                    service so I am prepared to not just code but communicate
                    with professional detail.
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Grid columns={3} stackable>
            <Grid.Row style={{ margin: "10px" }}>
              {groups.map((groupList, index) => (
                <HeaderCard title={groupList} group={this.state[groupList]} />
              ))}
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Container>
    );
  }
}

export default HomePageHeader;

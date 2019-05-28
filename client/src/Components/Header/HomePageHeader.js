import React, { Component } from "react";
import { Grid, Header, Segment, Item } from "semantic-ui-react";
import profilePic from ".././../Images/profile pic.PNG";
import IntroductionSkills from "../Skills/IntroductionSkills";
class HomePageHeader extends Component {
  render() {
    return (
      <Grid.Column width={16}>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image avatar size="small" src={profilePic} />
              <Item.Content verticalAlign="bottom">
                <Header as="h1">Jonathan J. Holloway</Header>
                <br />
                <Header as = "h3">Software Engineer</Header>
                <br/>
                <Header as="h5">Crown Point, IN</Header>
              </Item.Content>
            </Item>
          </Item.Group>
          <IntroductionSkills />
        </Segment>
      </Grid.Column>
    );
  }
}

export default HomePageHeader;

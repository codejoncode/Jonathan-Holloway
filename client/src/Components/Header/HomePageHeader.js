import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Segment, Item, Icon, Card} from "semantic-ui-react";
import profilePic from ".././../Images/profile pic.PNG";
import IntroductionSkills from "../Skills/IntroductionSkills";

import {lighterBlue, darkBlack} from "../../Helpers/Colors/colors";

class HomePageHeader extends Component {
  render() {
    return (
      <Grid.Column width={16} >
        <Segment style={{backgroundColor: darkBlack}} textAlign='center'>
          <Item.Group>
              <Item.Image  src={profilePic} centered/>
            <Item>
              <Item.Content verticalAlign="bottom">
                <Header id = "lighterBlue" as="h1">Jonathan J. Holloway</Header>
                <br />
                <Header id = "lighterBlue" as = "h3">Software Engineer</Header>
                <br/>
                <Header id = "lighterBlue" as="h5">Crown Point, IN</Header>
                {/* <br/>
                <Header as="h6">JonathanJamelHolloway@gmail.com</Header> */}
                <br/>
                <a href="https://github.com/codejoncode" target="_blank" rel ="noopener noreferrer">
                <Icon   name="github" />
                </a>

                <a href="https://twitter.com/Jonathanjamelh1" target="_blank" rel ="noopener noreferrer">
                <Icon   name="linkedin" />
                </a>

                <a href="https://www.linkedin.com/in/jonathanjholloway/" target="_blank" rel ="noopener noreferrer">
                <Icon  name="twitter" />
                </a>
                
                
                

              </Item.Content>
            </Item>
          </Item.Group>
          {/* <IntroductionSkills /> */}
        </Segment>
        <Grid columns={3} stackable>
          <Grid.Row>
            <Grid.Column>
              <Card>
              <div style = {{textAlign: "center"}}>
                <Icon name = "desktop" size= "huge"/>
              
              </div>
                <Card.Content>
                <Card.Header>FRONTEND</Card.Header>
                <Card.Description>

                </Card.Description>

                </Card.Content>

              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
              <div style = {{textAlign: "center"}}>
              
              <Icon name = "database" size= "huge"/>
              </div>
              <Card.Content>
                <Card.Header>BACKEND</Card.Header>
                <Card.Description>
                  
                </Card.Description>

                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <div style = {{textAlign: "center"}}>
              <Icon name = "bolt" size= "huge" />

                </div>
              <Card.Content>
                <Card.Header>OTHERS</Card.Header>
                <Card.Description>
                  
                </Card.Description>

                </Card.Content>
              </Card>
            </Grid.Column>
            
          </Grid.Row>
        </Grid>
      </Grid.Column>
    );
  }
}

export default HomePageHeader;

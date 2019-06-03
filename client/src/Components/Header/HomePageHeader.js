import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Header,
  Segment,
  Item,
  Icon,
  Card,
  List, 
  Container, 
  Image,
} from "semantic-ui-react";
import profilePic from ".././../Images/profile pic.PNG";
import IntroductionSkills from "../Skills/IntroductionSkills";

import { lighterBlue, darkBlack } from "../../Helpers/Colors/colors";

class HomePageHeader extends Component {
  render() {
    return (
      <Container>
      <Grid.Column width={16}>
        <Segment style={{ backgroundColor: darkBlack }}  stacked>
          <Item.Group>
            <Image src={profilePic} centered/>
            <Item style={{textAlign: "center"}}>
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
                
                {/* <br/>
                <Header as="h6">JonathanJamelHolloway@gmail.com</Header> */}
                <br />
                <a
                  href="https://github.com/codejoncode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" />
                </a>

                <a
                  href="https://twitter.com/Jonathanjamelh1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jonathanjholloway/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="twitter" />
                </a>
                <Item.Description style= {{color: "#66FCF1"}}>
                I am a Software developer with a passion for getting results. I love seeing something grow and come alive or even expanding something that already exists. Coding is a life change for me but I come from a  background of customer service so I am prepared to not just code but communicate with professional detail. 
                </Item.Description>
              </Item.Content>
              
            </Item>
          </Item.Group>
          {/* <IntroductionSkills /> */}
        </Segment>
        <Grid columns={3} stackable>
          <Grid.Row style={{ margin: "10px" }}>
            <Grid.Column>
              <Card style = {{backgroundColor: "#C5C6C7"}}>
                <div style={{ textAlign: "center" }}>
                  <Icon name="desktop" size="huge" style= {{color: "#66FCF1"}}/>
                </div>
                <Card.Content>
                  <Card.Header>FRONTEND</Card.Header>
                  <Card.Description>
                    <List>
                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>React/Redux</List.Header>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>JavaScript</List.Header>
                        </List.Content>
                      </List.Item>
                    
                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>Node.js</List.Header>
                        </List.Content>
                      </List.Item>
                    
                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>HTML/CSS/Less</List.Header>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>Styled Components</List.Header>
                        </List.Content>
                      </List.Item>


                    </List>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card style = {{backgroundColor: "#C5C6C7"}}>
                <div style={{ textAlign: "center" }}>
                  <Icon name="database" size="huge" style= {{color: "#66FCF1"}}/>
                </div>
                <Card.Content>
                  <Card.Header>BACKEND</Card.Header>
                  <Card.Description>
                    <List>
                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>Python/Django</List.Header>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>Firebase</List.Header>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>PostgresSQL</List.Header>
                        </List.Content>
                      </List.Item>


                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>Sqlite3</List.Header>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                          <List.Header>Express</List.Header>
                        </List.Content>
                      </List.Item>



                    </List>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card style = {{backgroundColor: "#C5C6C7"}}>
                <div style={{ textAlign: "center" }}>
                  <Icon name="bolt" size="huge" style= {{color: "#66FCF1"}} />
                </div>
                <Card.Content>
                  <Card.Header>OTHERS</Card.Header>
                  <Card.Description>
                    <List>
                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                        <List.Header>C programming</List.Header>
                          
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                        <List.Header>Unit Testing</List.Header>
                          
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                        <List.Header>Project Management</List.Header>
                          
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                        <List.Header>Coding Teaching Assistance</List.Header>
                          
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <Icon name="check" style= {{color: "#66FCF1"}}/>
                        <List.Content>
                        <List.Header>Customer Service Professional</List.Header>
                        </List.Content>
                      </List.Item>

                      
                    </List>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
      </Container>
    );
  }
}

export default HomePageHeader;

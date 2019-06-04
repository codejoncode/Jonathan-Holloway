import React, { Component } from "react";
import { Container, Image, List, Header, Icon, Grid} from "semantic-ui-react";
import {
  darkBlack,
  lightBlack,
  grey,
  lighterBlue,
  anotherBlue
} from "../../Helpers/Colors/colors";
import footerPicture from "../../Images/footer picture.PNG";
import engineerLogo from "../../Images/White background engineer.PNG";
class Footer extends Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: lighterBlue }}>
        <Grid centered columns= {2}>
        <Grid.Row>
            <Grid.Column>
        <Image avatar size="small" centered src={footerPicture} />
        <Image size = "small" centered src ={engineerLogo} />
            </Grid.Column>
          <Grid.Column>

        <Header>Interested in hiring me for your project?</Header>

        <List>
          <List.Item>
            <List.Content>
              {/* <List.Header>I have the training and expereience for the following roles: </List.Header> */}
              <List.Item>
                <Icon name="mail" />
                {/* Software Engineer */}
                jonathanjamelholloway at gmail
              </List.Item>

              <List.Item>
                <Icon name="github" />
                {/* Full Stack Web Developer */}
                <a
                  style={{color: darkBlack, marginBottom: "10px"}}
                  href="https://github.com/codejoncode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </List.Item>

              <List.Item>
                <Icon name="linkedin" />
                {/* Front-end Developer */}
                <a
                  style={{color: darkBlack, marginBottom: "10px"}}
                  href="https://www.linkedin.com/in/jonathanjholloway/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </List.Item>
            </List.Content>
          </List.Item>
        </List>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default Footer;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Image, List, Header, Icon, Grid, Button} from "semantic-ui-react";
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


  changePages = (page) => () => {
    this.props.history.push(page)
  }

  render() {
    return (
      <Container fluid style={{ backgroundColor: lighterBlue, marginTop: "25px" }}>
        <Grid centered columns= {2}>
        <Grid.Row>
            <Grid.Column>
        <Image  size="small" centered src={footerPicture} />
        <Image  size = "medium" centered src ={engineerLogo} />
            </Grid.Column>
          <Grid.Column>

        <Header>Interested in hiring me for your project?</Header>

        <List>

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
        </List>
        <br/>
        <Button onClick = {this.changePages("/contact")}>Contact</Button>
        <br/>
        <br/>
        <Button onClick = {this.changePages("/admin/login")}>Admin Login</Button>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default Footer;

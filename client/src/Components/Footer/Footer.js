import React, { Component } from "react";
import { Container, Image, List, Header, Icon, Grid, Button} from "semantic-ui-react";
import {
  darkBlack,
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
        <br/>
        <Image  size = "medium" centered src ={engineerLogo} />
            </Grid.Column>
          <Grid.Column>

        <Header>Interested in hiring me for your project?</Header>

        <List>

            <List.Content>
              {/* <List.Header>I have the training and expereience for the following roles: </List.Header> */}

              <List.Item>
                {/* Full Stack Web Developer */}
                <a
                  style={{color: darkBlack, marginBottom: "10px"}}
                  href="https://github.com/codejoncode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <Icon name="github" size = "big" /> Github
                </a>
              </List.Item>
              <br/>
              <List.Item>
               
                {/* Front-end Developer */}
                <a
                  style={{color: darkBlack, marginBottom: "10px"}}
                  href="https://www.linkedin.com/in/jonathanjholloway/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <Icon name="linkedin" size = "big"/> LinkedIn
                </a>
              </List.Item>
              
              <List.Item>
                <br/>
                <Button style = {{backgroundColor: darkBlack, color: anotherBlue}} onClick = {this.changePages("/contact")}>
                <Icon name = "mail" />
                Contact</Button>
                <br/>
                <br/>
                <Button style = {{backgroundColor: darkBlack, color: anotherBlue}} onClick = {this.changePages("/admin/login")}>
                <Icon name = "user secret" />
                Admin Login</Button>

              </List.Item>
            </List.Content>
        </List>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default Footer;

import React, { Component } from 'react'
import {Container, Image, List, Header, Icon} from "semantic-ui-react";
import {darkBlack,lightBlack,grey,lighterBlue,anotherBlue } from "../../Helpers/Colors/colors"
import footerPicture from "../../Images/footer picture.PNG";
class Footer extends Component {
    render() {
        return (
            <Container fluid style = {{backgroundColor: lighterBlue}}>
                <Image avatar size='small' centered  src={footerPicture}/>
                <Header>Interested in hiring me for your project?</Header>
                <List>
                    <List.Item>
                        <List.Content>
                            <List.Header>I have the training and expereience for the following roles: </List.Header>
                            <List.Item>
                                <Icon name="check" />
                                Software Engineer
                            </List.Item>

                            <List.Item>
                                <Icon name="check" />
                                Full Stack Web Developer
                            </List.Item>

                            <List.Item>
                                <Icon name="check" />
                                Front-end Developer
                            </List.Item>

                            <List.Item>
                                <Icon name="check" />
                                Back-end Developer 
                            </List.Item>
                        </List.Content>
                    </List.Item>
                </List>     
                
            </Container>

        )
    }
}
export default Footer;
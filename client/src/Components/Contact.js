import React, { Component } from 'react'
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
    Input, 
    Label ,
    Form
  } from "semantic-ui-react";
import contactImage  from "../Images/footer picture.PNG";

class Contact extends Component {
    render() {
        const {lighterBlue, grey} = this.props; 
        return (
            <Container>
                <Grid columns= {1}>
                <Grid.Row>
                <Image avatar centered size="large" src={contactImage}/>
                <Header  textAlign = "center">Currently looking for work as a Software Engineer, Full Stack Developer Frontend or Backend Engineer</Header>
                <Header  textAlign = "center">View my <Link to = "/resume">Resume</Link> and my <Link to = "/projects">Projects</Link></Header>
                <br/>
                <Grid.Column>

                </Grid.Column>
                </Grid.Row>


                <Form inverted>
                    <Form.Group widths = "equal">
                        <Form.Field required placeholder = "name" label = "Name" control = 'input' />
                        <Form.Field required placeholder = "company" label = "Company" control = 'input' />
                        <Form.Field required placeholder = "Email" label = "Email" control = 'input' />
                    </Form.Group>

                        <Form.Field required placeholder = "Enter your message" control = 'textarea' />

                </Form>



                </Grid>
            </Container>
        )
    }
}
export default  Contact; 
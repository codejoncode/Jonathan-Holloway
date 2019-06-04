import React, { Component } from 'react'
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
import contactImage  from "../Images/footer picture.PNG";

class Contact extends Component {
    render() {
        return (
            <Container>
                <Image avatar centered size="small" src={contactImage}/>
                <Card>

                </Card>
            </Container>
        )
    }
}
export default  Contact; 
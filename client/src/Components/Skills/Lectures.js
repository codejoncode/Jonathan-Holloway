import React, { Component } from 'react'
import { Grid, Header, Divider, Icon, Item, Segment, Container } from "semantic-ui-react";
class Lectures extends Component {
    render() {
        return (
            <Container>
            <Grid width={16}>
            <Segment.Group>
                <Segment>

                <p>Here is my last week of lectures from when I was a teachers assistant at Lambda School Academy of Computer Science</p>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/lxuyCxw_sg4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/KWKR4tXLqW8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/otxoIXgr6Tk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/UH6QHhxB3TQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Segment>
            </Segment.Group>
            </Grid>
            </Container>
        )
    }
}
export default Lectures;
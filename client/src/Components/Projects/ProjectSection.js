import React, { Component } from "react";
import { Grid, Image, Button, Card, Popup, Container, Reveal} from "semantic-ui-react";

class ProjectSection extends Component {
  state = {
    style : {
      borderRadius: 0,
      opacity: 0.7,
      padding: '2em',
    }
  }
  render() {
    const { projects, goToProjectPage } = this.props;
    const {style} = this.state;
    return (
      <Grid.Row stretched>
        <br />
        {projects &&
          projects.map((project, index) => (
            <Grid.Column key={index}>
              <Container>
              {/* <Popup 
               
              // trigger = {}
              // content = {project.description}
              // style = {style}
              // inverted
              // position = "top center"
              // /> */}
              <Card onClick={() => goToProjectPage(project.id)} style = {{background: "#C5C6C7"}}>
                <Reveal animated= 'move down'>
                  <Reveal.Content visible>
                <Image src={project.image} fluid style={{ height: "220px" }} />                  
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <p style = {style}>{project.description}</p>
                  </Reveal.Content>
                </Reveal>
              </Card>
              </Container>
            </Grid.Column>
          ))}
      </Grid.Row>
    );
  }
}

export default ProjectSection;

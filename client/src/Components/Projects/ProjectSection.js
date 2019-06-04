import React, { Component } from "react";
import { Grid, Image, Button, Card, Popup, Container, Reveal} from "semantic-ui-react";

class ProjectSection extends Component {
  state = {
    style : {
      borderRadius: 0,
      opacity: 0.7,
      padding: '2em',
      color: "#66FCF1",
      background: "#0B0C10"
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
              
              <Card onClick={() => goToProjectPage(project.id)} style = {{background: "#0B0C10"}}>
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

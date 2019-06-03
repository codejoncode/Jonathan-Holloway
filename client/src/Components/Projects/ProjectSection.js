import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";

class ProjectSection extends Component {
  render() {
    const { projects, goToProjectPage } = this.props;
    return (
      <Grid.Row stretched>
        <br />
        {projects &&
          projects.map((project, index) => (
            <Grid.Column key={index}>
              <Button onClick={() => goToProjectPage(project.id)} style = {{background: "#66FCF1"}}>
                <Image src={project.image} fluid style={{ height: "220px" }} />
              </Button>
            </Grid.Column>
          ))}
      </Grid.Row>
    );
  }
}

export default ProjectSection;

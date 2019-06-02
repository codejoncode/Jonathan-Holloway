import React, { Component } from "react";
import { Grid, Image, Modal, Button } from "semantic-ui-react";
import ProjectFeatureList from "./ProjectFeatureList";
import ProjectDetails from "./ProjectDetails";

class ProjectSection extends Component {
  
 

  render() {
    const { projects, handleOpen, handleClose, modalOpen, goToProjectPage } = this.props;
    return (
      <Grid.Row stretched>
        <br />
        {projects &&
          projects.map((project, index) => (
            <Grid.Column key={index}>
              
                {/* <ProjectDetails
                  handleClose={handleClose}
                  handleOpen = {handleOpen}
                  modalOpen={modalOpen}
                  project={project}
                /> */}
                
            <Button onClick = {() => goToProjectPage(project.id)}>
            <Image
               src={project.image}
               fluid
           style={{ height: "220px" }}
            />
           </Button>

            </Grid.Column>
          ))}
      </Grid.Row>
    );
  }
}

export default ProjectSection;

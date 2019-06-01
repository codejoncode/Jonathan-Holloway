import React, { Component } from "react";
import { Grid, Image, Modal, Button } from "semantic-ui-react";
import ProjectFeatureList from "./ProjectFeatureList";
import ProjectDetails from "./ProjectDetails";

class ProjectSection extends Component {
  openProjectModal = currentModal => {
    this.props.handleOpen(currentModal);
  };

  render() {
    const { projects, handleOpen, handleClose, modalOpen } = this.props;
    return (
      <Grid.Row stretched>
        <br />
        {projects &&
          projects.map((project, index) => (
            <Grid.Column key={index}>
              <Modal
                dimmer = "inverted"
                size = "small"
                trigger={
                  <Button onClick={() => this.openProjectModal("ProjectModal")}>
                    <Image
                      src={project.image}
                      fluid
                      style={{ height: "220px" }}
                    />
                  </Button>
                }
                open={modalOpen}
                onClose={() => handleClose(null)}
              >
                <ProjectDetails
                  handleClose={handleClose}
                  modalOpen={modalOpen}
                  project={project}
                />
              </Modal>
              {/* <Message header ={project.title} content = {project.description}/> */}
              {/* <Message>
                            <Message.Header>Features</Message.Header>
                            {project.features &&  
                                <Message.List>
                                    <ProjectFeatureList features = {project.features} />
                                </Message.List> }
                        </Message> */}
            </Grid.Column>
          ))}
      </Grid.Row>
    );
  }
}

export default ProjectSection;

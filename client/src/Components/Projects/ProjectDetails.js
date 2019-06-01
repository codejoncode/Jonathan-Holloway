import _ from "lodash";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Header, Icon, Image, Menu } from "semantic-ui-react";
import ProjectFeatureList from "./ProjectFeatureList";

class ProjectDetails extends Component {
  state = {};
  //   closeProjectModal = currentModal => {
  //     this.props.handleClose(currentModal);
  //   }
  //   openProjectModal = currentModal => {
  //     this.props.handleOpen(currentModal);
  //   };
  render() {
    const { project, modalOpen, handleClose } = this.props;
    console.log(this.props);
    return (
      <Menu>
        <Menu.Header>Profile Picture</Menu.Header>
        <Menu.Content image scrolling>
          <Image size="medium" src={project.image} wrapped />

          <Menu.Description>
            <Header>{project.title}</Header>
            <p>{project.description}</p>

            {_.times(8, i => (
              <Image
                key={i}
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ paddingBottom: 5 }}
              />
            ))}
            <ProjectFeatureList features={project.features} />
          </Menu.Description>
        </Menu.Content>
        <Menu.Actions>
          {/* <Button primary onClick = {() => this.closeProjectModal(null)}>
            Close <Icon name="close" />
          </Button> */}
        </Menu.Actions>
      </Menu>
    );
  }
}
export default withRouter(ProjectDetails);

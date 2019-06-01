import _ from "lodash";
import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";

class ProjectDetails extends Component {
  closeProjectModal = currentModal => {
    this.props.handleClose(currentModal);
  }
  render() {
    return (
      <div>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image scrolling>
          <Image
            size="medium"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            wrapped
          />

          <Modal.Description>
            <Header>Modal Header</Header>
            <p>
              This is an example of expanded content that will cause the modal's
              dimmer to scroll
            </p>

            {_.times(8, i => (
              <Image
                key={i}
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                style={{ paddingBottom: 5 }}
              />
            ))}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick = {() => this.closeProjectModal(null)}>
            Close <Icon name="close right" />
          </Button>
        </Modal.Actions>
        </div>
    );
  }
}
export default ProjectDetails;

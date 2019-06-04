import React, { Component } from "react";
import { Grid, Menu, Header, Button, Popup, Confirm } from "semantic-ui-react";
import { technologiesData } from "../../Helpers/projectData";
import ProjectSection from "./ProjectSection";

const timeoutLength = 5000; 

class Projects extends Component {
  state = { isOpen : true, open: true, popUpStyle: {backgroundColor: "#0B0C10", color: "#66FCF1"}}

  componentDidMount () {
    this.handleOpen();
  }
  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, timeoutLength)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    const technologies = ["ALL", ...technologiesData];
    const { handleOpen, handleClose, modalOpen, currentModal, projectsDisplay, activeItem, columnCount, handleItemClick, goToProjectPage } = this.props;
    const { isOpen, open, popUpStyle} = this.state; 
    return (
      <div style={{ margin: "20px" }}>
        <Menu pagination fluid stackable id ="navTagsBlue" style = {{background: "#0B0C10"}}>
          {technologies.map((tech, index) => (
            <Menu.Item
              key={index}
              name={tech.toUpperCase()}
              active={activeItem === tech.toUpperCase()}
              onClick={handleItemClick}
            />
          ))}
        </Menu>
        
        {/* <Header style={{ margin: "20px", textAlign: "center" }}>
          Click a tab to filter the projects list. */}
          <Popup 
        content = "Click a tab to filter the projects list, or click a project for more information."
        open = {isOpen}
        onClose = {this.handleClose}
        onOpen= {this.handleOpen}
        position = 'top center'
        trigger={<div></div>}
        style = {popUpStyle}
        />
        {/* <Confirm
          open={this.state.open}
          content='This is a custom message'
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        /> */}
        {/* </Header> */}
        {/* <Header style={{ textAlign: "center", margin: "20px" }}>
          Click a project for more information.
        </Header> */}
        <Grid
          style={{ margin: "20px" }}
          columns={columnCount}
          divided
          stackable
        >

          {projectsDisplay.map((projects, index) => (
            
            <ProjectSection
              key={index}
              projects={projects}
              handleOpen={handleOpen}
              handleClose={handleClose}
              modalOpen={modalOpen}
              currentModal={currentModal}
              goToProjectPage = {goToProjectPage}
            />
          ))}
        </Grid>
      </div>
    );
  }
}
export default Projects;

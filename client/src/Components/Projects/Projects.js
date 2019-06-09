import React, { Component } from "react";
import { Grid, Menu, Header, Button, Popup, Confirm } from "semantic-ui-react";
import { technologiesData } from "../../Helpers/projectData";
import ProjectSection from "./ProjectSection";

const timeoutLength = 10000; 

class Projects extends Component {
  state = { isOpen : true, open: true, popUpStyle: {backgroundColor: "#66FCF1", color: "#0B0C10", fontWeight: "900"}}

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
    const { handleOpen, handleClose, modalOpen, currentModal, projectsDisplay, activeItem, columnCount, handleItemClick, goToProjectPage,darkBlack,lightBlack,grey,lighterBlue,anotherBlue } = this.props;
    const { isOpen, open, popUpStyle} = this.state; 
    return (
      <div style={{ margin: "20px" }}>
        <Menu pagination fluid stackable id ="navTagsBlue" style = {{background: darkBlack}}>
          {technologies.map((tech, index) => (
            <Menu.Item
              key={index}
              name={tech.toUpperCase()}
              active={activeItem === tech.toUpperCase()}
              onClick={handleItemClick}
            />
          ))}
        </Menu>
        
          <Popup 
        content = {"Hover over a Project for a description. \n\n Click a tab to filter the projects list. \n\n Click a project for more information."}
        open = {isOpen}
        onClose = {this.handleClose}
        onOpen= {this.handleOpen}
        position = 'top center'
        trigger={<div></div>}
        style = {popUpStyle}
        />
        
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
              darkBlack = {darkBlack}
              lightBlack = {lightBlack} 
              grey = {grey}
              lighterBlue = {lighterBlue} 
              anotherBlue = {anotherBlue}
            />
          ))}
        </Grid>
      </div>
    );
  }
}
export default Projects;

import React, { Component } from "react";
import { Grid, Menu } from "semantic-ui-react";
import { technologiesData, projectData  } from "../../Helpers/projectData";
import ProjectSection from "./ProjectSection";



class Projects extends Component {
  state = {
    columnCount: 3,
    activeItem: "ALL"
  };

  handleItemClick = (e, { name }) => () => {
    this.setState({activeItem: name.toUpperCase()})
  }

  render() {
    const rowCount = Math.ceil(projectData.length / this.state.columnCount);
    const projectsDisplay = [];
    let projectCount = 0;

    for (let i = 0; i < rowCount; i++) {
      let setOfColumns = [];

      for (let j = projectCount; j < projectCount + 3; j++) {
        if (projectData[j]) {
          setOfColumns.push(projectData[j]);
        }
      }
      projectsDisplay.push(setOfColumns);
      projectCount += 3;
    }
    console.log(projectsDisplay);
    const { activeItem } = this.state;
    const technologies = ["ALL", ...technologiesData]
    return (
      <div style={{ margin: "20px" }}>
        {/* <Tab menu={{ pointing: true }} panes={panes} fluid stackable /> */}
        <Menu pagination fluid stackable>
          {technologies.map((tech, index) => <Menu.Item name = {tech.toUpperCase()} active={activeItem === tech.toUpperCase()} onClick = {this.handleItemClick}></Menu.Item>)}
        </Menu>
        <br/>
        <Grid style = {{margin: "20px"}}columns={this.state.columnCount} divided stackable>
          {projectsDisplay.map((projects, index) => (
            <ProjectSection key={index} projects={projects} />
          ))}
        </Grid>
      </div>
    );
  }
}
export default Projects;

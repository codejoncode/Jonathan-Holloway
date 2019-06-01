import React, { Component } from "react";
import { Grid, Menu, Header } from "semantic-ui-react";
import { technologiesData, projectData  } from "../../Helpers/projectData";
import ProjectSection from "./ProjectSection";



class Projects extends Component {
  state = {
    columnCount: 3,
    activeItem: "ALL",
    projectsDisplay: []
  };

  componentDidMount () {
    this.filterData("ALL");
  }

  filterData = async (name) => {
    const rowCount = Math.ceil(projectData.length / this.state.columnCount);
    const projectsDisplay = [];
    let projectCount = 0;

    for (let i = 0; i < rowCount; i++) {
      let setOfColumns = [];
      while (projectCount < projectData.length-1){
        if (projectData[projectCount]) {
          const tech = projectData[projectCount].technologies.toUpperCase();
          if (this.state.activeItem === "ALL" || tech.includes(this.state.activeItem) === true){
            setOfColumns.push(projectData[projectCount]);
            if(setOfColumns.length === 3) {
              projectCount += 1; 
              break;
            }
          }
        }
        projectCount += 1 
      }
      if(setOfColumns.length > 0){
        projectsDisplay.push(setOfColumns);
      }
      if (projectCount >= projectData.length){
        break;
      }

    }
    console.log(projectsDisplay);
    this.setState({projectsDisplay, activeItem: name})
  }


  handleItemClick =  (e, { name }) => {
    this.setState({activeItem : name}, () => this.filterData(name.toUpperCase()))
  }

  render() {
    
    const { activeItem, projectsDisplay } = this.state;
    const technologies = ["ALL", ...technologiesData]
    console.log(`The activeItme is : ${activeItem}`)
    console.log(projectsDisplay)
    return (
      <div style={{ margin: "20px" }}>
        <Header style={{ margin: "20px", textAlign: "center" }}>Click a tab to filter the projects list.</Header>
        <Menu pagination fluid stackable>
          {technologies.map((tech, index) => <Menu.Item key = {index} name = {tech.toUpperCase()} active={activeItem === tech.toUpperCase()} onClick = {this.handleItemClick}></Menu.Item>)}
        </Menu>
        <Header style = {{textAlign: "center", margin: "20px"}}>Click a project for more information.</Header>
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

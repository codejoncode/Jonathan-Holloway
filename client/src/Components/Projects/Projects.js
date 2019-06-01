import React, { Component } from "react";
import { Grid, Image, Tab, Menu } from "semantic-ui-react";
import { technologiesData, projectData  } from "../../Helpers/projectData";
import ProjectSection from "./ProjectSection";

/*panes will have all and a list of different technologies */
// const panes = [
//   {
//     menuItem: "ALL",
//     render: () => <Tab.Pane attached={false}>ALL</Tab.Pane>
//   },
//   {
//     menuItem: "Tab 1",
//     render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>
//   },
//   {
//     menuItem: "Tab 2",
//     render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
//   },
//   {
//     menuItem: "Tab 3",
//     render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
//   }
// ];
// const panes = [
//     {
//     menuItem: "ALL",
//     render: () => <Tab.Pane attached={false}>ALL</Tab.Pane>
//   },
// ]; 

// for(let tech of technologiesData){
//   let obj = {}
//   obj.menuItem = tech.toUpperCase()
//   obj.render = () => <Tab.Pane attached={false}>{tech.toUpperCase()}</Tab.Pane>
//   panes.push(obj);
// }




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
        <Grid columns={this.state.columnCount} divided>
          {projectsDisplay.map((projects, index) => (
            <ProjectSection key={index} projects={projects} />
          ))}
        </Grid>
      </div>
    );
    // return (
    //   <div style = {{margin: "20px"}}>
    //     <Tab menu = {{pointing: true}} panes={panes} />
    //     <Grid columns={this.state.columnCount} divided>
    //     <Grid.Row>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //     </Grid.Row>

    //     <Grid.Row>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //     </Grid.Row>

    //     <Grid.Row>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //     </Grid.Row>

    //     <Grid.Row>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //     </Grid.Row>

    //     <Grid.Row>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //       <Grid.Column>
    //         <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    //   </div>
    // )
  }
}
export default Projects;

import React, { Component } from "react";
import { Grid, Image, Tab } from "semantic-ui-react";
import { projects as projectData } from "../../Helpers/projectData";
import ProjectSection from "./ProjectSection";

/*panes will have all and a list of different technologies */
const panes = [
  {
    menuItem: "Tab 1",
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>
  },
  {
    menuItem: "Tab 2",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
  },
  {
    menuItem: "Tab 3",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
  }
];

class Projects extends Component {
  state = {
    columnCount: 3
  };

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
    return (
      <div style={{ margin: "20px" }}>
        <Tab menu={{ pointing: true }} panes={panes} />
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

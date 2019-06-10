import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Menu, Header, Button, Popup, Confirm } from "semantic-ui-react";
import { technologiesData } from "../../Helpers/projectData";
import ProjectSection from "./ProjectSection";
import {
  fetchOneProject,
  fetchProjects
} from "../../Store/Actions/projectActions";
const timeoutLength = 10000;

const mapState = state => ({
  projects: state.projectReducer
});

const actions = {
  fetchOneProject,
  fetchProjects
};

class Projects extends Component {
  state = {
    isOpen: true,
    open: true,
    popUpStyle: {
      backgroundColor: "#66FCF1",
      color: "#0B0C10",
      fontWeight: "900"
    },
    intialized: false,
    columnCount: 5,
    activeItem: "ALL",
    projectsDisplay: [], 
    technologies : [],
  };

  componentDidMount() {
    this.handleOpen();
    this.props.fetchProjects();
  }

  componentWillUpdate() {
    if (this.state.intialized === false && this.props.projects.length > 0) {
      console.log(this.props.projects);
      this.filterData(this.props.projects, "ALL")
    }
  }

  filterData = async (projects, name) => {
    const rowCount = Math.ceil(projects.length / this.state.columnCount);
    const projectsDisplay = [];
    let projectCount = 0;

    for (let i = 0; i < rowCount; i++) {
      let setOfColumns = [];
      while (projectCount < projects.length) {
        if (projects[projectCount]) {
          const tech = projects[projectCount].technologies.toUpperCase();
          if (
            this.state.activeItem === "ALL" ||
            tech.includes(this.state.activeItem) === true
          ) {
            setOfColumns.push(projects[projectCount]);
            if (setOfColumns.length === this.state.columnCount) {
              projectCount += 1;
              break;
            }
          }
        }
        projectCount += 1;
      }
      if (setOfColumns.length > 0) {
        projectsDisplay.push(setOfColumns);
      }
      if (projectCount >= projects.length) {
        break;
      }
    }

    const technologiesData = [];
    for (let project of projects) {
      const tech = project.technologies.split(" ");
      for (let t of tech) {
        if (technologiesData.includes(t.toUpperCase()) === false && t.length > 0) {
          technologiesData.push(t.toUpperCase());
        }
      }
}

technologiesData.sort();
    this.setState({ projectsDisplay, activeItem: name, intialized: true, technologies: technologiesData });
     
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name }, () =>
      this.filterData(name.toUpperCase())
    );
  };

  handleOpen = () => {
    this.setState({ isOpen: true });

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false });
    }, timeoutLength);
  };

  handleClose = () => {
    this.setState({ isOpen: false });
    clearTimeout(this.timeout);
  };
  handleConfirm = () => this.setState({ open: false });
  handleCancel = () => this.setState({ open: false });

  render() {
    // const technologies = ["ALL", ...technologiesData];
    const technologies = ["ALL", ...this.state.technologies]
    const {
      handleOpen,
      handleClose,
      modalOpen,
      currentModal,
      // projectsDisplay,
      activeItem,
      columnCount,
      // handleItemClick,
      goToProjectPage,
      darkBlack,
      lightBlack,
      grey,
      lighterBlue,
      anotherBlue
    } = this.props;
    const { isOpen, open, popUpStyle, projectsDisplay } = this.state;
    console.log(this.state.projectsDisplay);
    return (
      <div style={{ margin: "20px" }}>
        <Menu
          pagination
          fluid
          stackable
          id="navTagsBlue"
          style={{ background: darkBlack }}
        >
          {technologies.map((tech, index) => (
            <Menu.Item
              key={index}
              name={tech.toUpperCase()}
              active={activeItem === tech.toUpperCase()}
              onClick={this.handleItemClick}
            />
          ))}
        </Menu>

        <Popup
          content={
            "Hover over a Project for a description. \n\n Click a tab to filter the projects list. \n\n Click a project for more information."
          }
          open={isOpen}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          position="top center"
          trigger={<div />}
          style={popUpStyle}
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
              goToProjectPage={goToProjectPage}
              darkBlack={darkBlack}
              lightBlack={lightBlack}
              grey={grey}
              lighterBlue={lighterBlue}
              anotherBlue={anotherBlue}
            />
          ))}
        </Grid>
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(Projects);

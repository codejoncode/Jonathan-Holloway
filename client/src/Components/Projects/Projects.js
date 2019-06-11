import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Menu,  Popup} from "semantic-ui-react";
import ProjectSection from "./ProjectSection";
import {
  fetchOneProject,
  fetchProjects
} from "../../Store/Actions/projectActions";
import filterData from "../../Helpers/Functions/filterData";

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
    technologies: []
  };

  componentDidMount() {
    this.props.fetchProjects();
  }
  
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name.toUpperCase()});
  }

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
    const {
      darkBlack,
      lightBlack,
      grey,
      lighterBlue,
      anotherBlue
    } = this.props;
    const { isOpen,  popUpStyle, activeItem, columnCount} = this.state;
    const data = filterData(this.props.projects,columnCount, activeItem);
    const projectsDisplay = data[0];
    const technologies = ["ALL", ...data[1]]
    return (
      <div style={{ margin: "20px" }}>
        <Menu
          pagination
          fluid
          stackable
          id="navTagsBlue"
          style={{ background: darkBlack, border: `2px solid ${anotherBlue}`}}
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

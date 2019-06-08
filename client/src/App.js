import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
// import { Grid } from "semantic-ui-react";
// import { Container } from "reactstrap";
import "./App.css";

import LandingPage from "./Components/LandingPage";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Header/NavBar";
import Lectures from "./Components/Skills/Lectures";
import ResumePage from "./Components/ResumePage/ResumePage";
import Projects from "./Components/Projects/Projects";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import { projectData } from "./Helpers/projectData";
import HomePageHeader from "./Components/Header/HomePageHeader";
import {darkBlack,lightBlack,grey,lighterBlue,anotherBlue } from "./Helpers/Colors/colors"
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact";
import SignIn from "./Components/Admin/SignIn";

class App extends Component {
  state = {
    modalOpen: false,
    currentModal: null,
    columnCount: 5,
    activeItem: "ALL",
    projectsDisplay: [], 

  };

  componentDidMount() {
    this.filterData("ALL");
  } 
  


  filterData = async name => {
    const rowCount = Math.ceil(projectData.length / this.state.columnCount);
    const projectsDisplay = [];
    let projectCount = 0;

    for (let i = 0; i < rowCount; i++) {
      let setOfColumns = [];
      while (projectCount < projectData.length) {
        if (projectData[projectCount]) {
          const tech = projectData[projectCount].technologies.toUpperCase();
          if (
            this.state.activeItem === "ALL" ||
            tech.includes(this.state.activeItem) === true
          ) {
            setOfColumns.push(projectData[projectCount]);
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
      if (projectCount >= projectData.length) {
        break;
      }
    }
    this.setState({ projectsDisplay, activeItem: name });
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name }, () =>
      this.filterData(name.toUpperCase())
    );
  };

  handleOpen = currentModal => this.setState({ modalOpen: true, currentModal });

  handleClose = currentModal =>
    this.setState({ modalOpen: false, currentModal });

  goToProjectPage = (id) => {
    this.props.history.push(`/project/${id}`)
  }

  render() {
    const {modalOpen, currentModal, columnCount, activeItem, projectsDisplay} = this.state;
    return (
      <div className="main">
        
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/admin/login" component = {SignIn} />
          
          <Route path="/home" component={HomePage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/lectures" component={Lectures} />
          <Route path = "/contact" component={() => <Contact
           darkBlack = {darkBlack}
           lightBlack = {lightBlack} 
           grey = {grey}
           lighterBlue = {lighterBlue} 
           anotherBlue = {anotherBlue}

          />} />
          <Route
            path="/projects"
            component={() => (
              <Projects
                modalOpen={modalOpen}
                handleClose={this.handleClose}
                handleOpen={this.handleOpen}
                currentModal={currentModal}
                columnCount = {columnCount}
                activeItem = {activeItem}
                projectsDisplay = {projectsDisplay}
                filterData = {this.filterData}
                handleItemClick = {this.handleItemClick}
                goToProjectPage = {this.goToProjectPage}
                darkBlack = {darkBlack}
                lightBlack = {lightBlack} 
                grey = {grey}
                lighterBlue = {lighterBlue} 
                anotherBlue = {anotherBlue}

              />
            )}
          />
          <Route path = "/project/:id" component = {() => <ProjectDetails projectsDisplay = {projectData}/>} />
        </Switch>
        <Footer history ={this.props.history}/>
      </div>
      
    );
  }
}

export default withRouter(App);

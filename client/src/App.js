import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Header/NavBar";
import Lectures from "./Components/Skills/Lectures";
import ResumePage from "./Components/ResumePage/ResumePage";
import Projects from "./Components/Projects/Projects";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import {
  darkBlack,
  lightBlack,
  grey,
  lighterBlue,
  anotherBlue
} from "./Helpers/Colors/colors";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact";
import SignIn from "./Components/Admin/SignIn";
import DisplayBlogs from "./Components/Admin/DisplayBlogs";
import BlogPage from "./Components/Admin/BlogPage";
import Blog from "./Components/Blog";




class App extends Component {
  state = {
    modalOpen: false,
    currentModal: null,
    columnCount: 5,
    activeItem: "ALL",
    projectsDisplay: []
  };

  handleOpen = currentModal => this.setState({ modalOpen: true, currentModal });

  handleClose = currentModal =>
    this.setState({ modalOpen: false, currentModal });

  goToProjectPage = id => {
    this.props.history.push(`/project/${id}`);
  };

  render() {
    const { modalOpen, currentModal, columnCount } = this.state;
    return (
      <div className="main">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/admin/login" component={SignIn} />
          <Route path="/admin/blogs" component={DisplayBlogs} />
          <Route path="/admin/blog/:id" component={BlogPage} />
          <Route path="/create" component={BlogPage} />
          {/* <Route path ="/admin/blog/:id" component = { () => <BlogPage  blogs = {this.props.blogs}/>} /> */}
          <Route path="/home" component={HomePage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/lectures" component={Lectures} />
          <Route path="/blog" component={Blog} />
          <Route
            path="/contact"
            component={() => (
              <Contact
                darkBlack={darkBlack}
                lightBlack={lightBlack}
                grey={grey}
                lighterBlue={lighterBlue}
                anotherBlue={anotherBlue}
              />
            )}
          />
          <Route
            path="/projects"
            component={() => (
              <Projects
                modalOpen={modalOpen}
                handleClose={this.handleClose}
                handleOpen={this.handleOpen}
                currentModal={currentModal}
                columnCount={columnCount}
                goToProjectPage={this.goToProjectPage}
                darkBlack={darkBlack}
                lightBlack={lightBlack}
                grey={grey}
                lighterBlue={lighterBlue}
                anotherBlue={anotherBlue}
                match={this.props.match}
                history={this.props.history}
              />
            )}
          />
          <Route
            path="/project/:id"
            component={(props) => (
              <ProjectDetails
                {...props}
                match={this.props.match}
                history={this.props.history}
              />
            )}
          />
          <Route component = {LandingPage} />
        </Switch>
        <Footer history={this.props.history} />
      </div>
    );
  }
}
// export default compose(withRouter, connect(mapState, actions))(App);
export default withRouter(App);

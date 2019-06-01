import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { Container } from "reactstrap";
import "./App.css";
import Test from "./Components/Test";
import LandingPage from "./Components/LandingPage";
import Example from "./Components/Example";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Header/NavBar";
import Resume from "./Components/ResumePage/Resume";
import Lectures from "./Components/Skills/Lectures";
import ResumePage from "./Components/ResumePage/ResumePage";
import Projects from "./Components/Projects/Projects";

class App extends Component {
  state = {
    modalOpen: false,
    currentModal: null
  };

  handleOpen = currentModal => this.setState({ modalOpen: true, currentModal });

  handleClose = currentModal =>
    this.setState({ modalOpen: false, currentModal });

  render() {
    console.log("This is the state");
    console.log(this.state);
    return (
      <div className="main">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/lectures" component={Lectures} />
          <Route
            path="/projects"
            component={() => (
              <Projects
                modalOpen={this.state.modalOpen}
                handleClose={this.handleClose}
                handleOpen={this.handleOpen}
                currentModal={this.state.currentModal}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

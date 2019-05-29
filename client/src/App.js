import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";
import Test from "./Components/Test";
import LandingPage from "./Components/LandingPage";
import Example from "./Components/Example";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Header/NavBar";
import Resume from "./Components/ResumePage/Resume";
import Lectures from "./Components/Skills/Lectures";

function App() {
  return (
    <div>
      <Container className="App main">
       <NavBar /> 
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/resume" component={Resume} />
          <Route path="/lectures" component={Lectures} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

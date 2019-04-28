import React from 'react';
import {Route, Switch } from "react-router-dom";
import { Container } from 'reactstrap';
import './App.css';
import Test from './Components/Test';
import LandingPage from './Components/LandingPage';
import Example from './Components/Example';
import HomePage from './Components/HomePage';

function App() {

 

  return (
    <Container>
      <div className="App">
        <Switch>
          <Route exact path = "/" component = {LandingPage} />
          <Route path = "/home"  component = {HomePage} />
        </Switch>
      </div>
    </Container>
  );
}

export default App;

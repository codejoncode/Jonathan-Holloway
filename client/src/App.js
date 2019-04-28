import React from 'react';
import {Route, Switch } from "react-router-dom";
import { Containter } from 'reactstrap';
import './App.css';
import Test from './Components/Test';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/" component = {LandingPage} />
      </Switch>
    </div>
  );
}

export default App;

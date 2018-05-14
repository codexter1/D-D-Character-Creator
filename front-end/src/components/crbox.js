import React, { Component } from 'react';
import '../styles/crbox.css';
import Onav from './onav.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Races from './races.js';
import Classes from './classes.js';


export default class Crbox extends Component {
  render() {
    return(
      <Router>
      <div className="topbox">
        <Onav />
        <Switch>
          <Route path="/races" exact component ={Races} />
          <Route path="/classes" exact component={Classes} />
        </Switch>
      </div>
      </Router>
    )
  }
}

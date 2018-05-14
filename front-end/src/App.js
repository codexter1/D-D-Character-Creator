import React, { Component } from 'react';
import './styles/App.css';
import Home from './home.js';

class App extends Component {
  render() {
    return (
      <div className="appbox">
        <Home />
      </div>
    );
  }
}

export default App;

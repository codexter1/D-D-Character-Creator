import React, { Component } from 'react';
import './styles/home.css';
import Crbox from './components/crbox.js';


export default class Home extends Component {
  render() {
    return(
      <div className='body'>
        <header>
          <h1>Dungeon Buddy</h1>
          <h2>Character Creator</h2>
        </header>
        <Crbox />
      </div>
    )
  }
}

import React, { Component } from 'react';
import axios from 'axios';
import '../styles/races.css'

export default class Races extends Component {
  state = {
    races: [],
  }

  componentDidMount() {
    axios.get(`http://www.dnd5eapi.co/api/races`).then(res => {
      console.log(res.data.results);
      this.setState({races: res.data.results});
    });
  }

  render() {
   return (
      <div className="racenames">
        {this.state.races.map(raced => <div className={raced.name}>{raced.name}</div>)}
      </div>
    )
  }
};

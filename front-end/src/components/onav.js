import React, { Component } from 'react';
import '../styles/onav.css';
import {Link} from 'react-router-dom';

export default class Onav extends Component {
  render() {
    return(
      <nav className="optnav">
        <div className="rniv"><Link className="racelnk" to='/races'>Race</Link></div>
        <div className="cniv"><Link className="classlnk" to='/classes'>Class</Link></div>
        <div className="sniv"><Link className="spellslnk" to='/'>Spells</Link></div>
        <div className="aniv"><Link className="atrblnk" to='/'>Attributes</Link></div>
        <div className="pniv"><Link className="proflnk" to='/'>Proficiencies</Link></div>
      </nav>
    )
  }
}

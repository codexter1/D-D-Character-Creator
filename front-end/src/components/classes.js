import React, { Component } from 'react';
import axios from 'axios';
import '../styles/classes.css';


export default class Classes extends Component {
  state = {
    classes: [],
  }

  componentDidMount() {
    axios.get(`http://www.dnd5eapi.co/api/classes`).then(res => {
      console.log(res.data.results);
      this.setState({classes: res.data.results});
    });
  }

//   render() {
//     return (
//       <ul>
//         { this.state.classes.map(classy => <li key={classy.id}>{classy.name}</li>)}
//       </ul>
//     )
//   }
// };

render() {
 return (
    <div className="classnames">
      {this.state.classes.map(classed => <div className={classed.id}>{classed.name}</div>)}
    </div>
  )
}
};

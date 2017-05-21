import React, { Component } from 'react';
import Lens from 'material-ui/svg-icons/image/lens';
import { cyan500 } from 'material-ui/styles/colors';

class Planets extends Component {
  content(planets) {
    return (
      <li key={planets.pl_name}>
        <a href="#">
          <Lens color={cyan500} />
        </a>
      </li>
    );
  }

  render() {
    if (this.props.stellarData) {
      return (
        <div>
          <p>planet</p>
          <ul>
            {this.props.stellarData.map(this.content)}
          </ul>
        </div>
      );
    }
  }
}

export default Planets;

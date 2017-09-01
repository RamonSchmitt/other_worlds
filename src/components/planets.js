import React, { Component } from 'react';

class Planets extends Component {
  content() {
    if (this.props.stellarData) {
      const planetSystem = this.props.stellarData;

      return planetSystem.map((planet) => {
        return (
          <li key={planet.pl_name}>
            <h1>{planet.pl_name}</h1>
            <p>year</p>
            <h1>{planet.pl_orbper}</h1>
          </li>
        );
      });
    }
    return <h1>-</h1>;
  }

  render() {
    return (
      <div>
        <p>known planets</p>
        {}
        <ul>
          {this.content()}
        </ul>
      </div>
    );
  }
}

export default Planets;

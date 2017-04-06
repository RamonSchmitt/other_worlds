import React, { Component } from 'react';
import { connect } from 'react-redux';

class StarSystem extends Component {
  renderStarSystem(starSystem) {
    const name = starSystem.pl_hostname;
    const distance = Math.round(starSystem.st_dist * 3.26163344 * 100) / 100;

    return (
      <div key={starSystem.id}>
        <p>star</p>
        <h1>{name}</h1>
        <p>distance from solar system</p>
        <h1>{distance} lightyears</h1>
      </div>
    );
  }

  renderPlanetList(planets) {
    // const planetsSorted = planets.sort((a, b) =>
    //   (a.pl_name > b.pl_name) ? 1 : ((b.pl_name > a.pl_name) ? -1 : 0),
    // );

    return (
      <li key={planets.id}>
        {planets.pl_name}
      </li>
    )
  }

  render() {
    return (
      <div>
        <div>
          {this.props.stellarData.stellarData.map(this.renderStarSystem)}
        </div>
        <ul>
          {this.props.stellarData.stellarData.map(this.renderPlanetList)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(StarSystem);

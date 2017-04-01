import React, { Component } from 'react';
import { connect } from 'react-redux';

class StarSystem extends Component {
  renderStarSystem(starsystem) {
    const name = starsystem[0].pl_hostname;
    const distance = Math.round(starsystem[0].st_dist * 3.26163344 * 100) / 100;

    return (
      <div key={starsystem.id}>
        <p>star</p>
        <h1>{name}</h1>
        <p>distance from solar system</p>
        <h1>{distance} lightyears</h1>
      </div>
    );
  }

  renderPlanetList(planets) {
    const planetsSorted = planets.sort((a, b) =>
      (a.pl_name > b.pl_name) ? 1 : ((b.pl_name > a.pl_name) ? -1 : 0),
    );

    return planetsSorted.map(planet =>
      <li key={planet.id}>
        {planet.pl_name}
      </li>,
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.props.stellarData.map(this.renderStarSystem)}
          <ul>
            {this.props.stellarData.map(this.renderPlanetList)}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ stellarData }) {
  return { stellarData };
}

export default connect(mapStateToProps)(StarSystem);

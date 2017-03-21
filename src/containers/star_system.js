import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../containers/search_bar';

class StarSystem extends Component {
  renderStarSystem(starsystem) {
    const name = starsystem[0].pl_hostname;
    const distance = Math.round(starsystem[0].st_dist * 3.26163344 * 100) / 100;

    return (
      <div>
        <p>star</p>
        <h1>{name}</h1>
        <p>distance from solar system</p>
        <h1>{distance} lightyears</h1>
      </div>
    );
  }

  renderPlanetList(planets) {
    return planets.map((planet) => {
      return (
        <li key={planet.id}>
          {planet.pl_name}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
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

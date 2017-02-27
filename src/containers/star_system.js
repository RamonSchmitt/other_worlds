import React, { Component } from 'react';
import { connect } from 'react-redux';

class StarSystem extends Component {
  renderStarSystem(starsystem) {
    const name = starsystem[0].pl_hostname;
    const distance = starsystem[0].st_dist * 3.26163344;
    let planets = [];

    starsystem.map((planet, index) => {
      planets.push(planet.pl_name);
    })

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{distance}</td>
        <td>{planets.join()}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Star</th>
            <th>Distance from the Sun in lightyears</th>
            <th>planets</th>
          </tr>
        </thead>
        <tbody>
          {this.props.stellarData.map(this.renderStarSystem)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ stellarData }) {
  return { stellarData };
}

export default connect(mapStateToProps)(StarSystem);

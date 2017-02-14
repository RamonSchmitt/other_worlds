import React, { Component } from 'react';
import { connect } from 'react-redux';

class StarSystem extends Component {
  renderStarSystem(starsystem) {
    const name = starsystem[0].pl_hostname;
    const planets = starsystem[0].pl_name;
    const distance = starsystem[0].st_dist;
    const year = starsystem[0].pl_orbper;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{planets}</td>
        <td>{distance}</td>
        <td>{year}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Star</th>
            <th>Planets</th>
            <th>Distance from the Sun in parsecs</th>
            <th>year</th>
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

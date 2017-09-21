import React, { Component } from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';

import Star from '../components/star';
import Planets from '../components/planets';

class StarSystem extends Component {
  renderPlanetList(planets) {
    return (
      <li key={planets.id}>
        {planets.pl_name}
      </li>
    );
  }

  render() {
    const { stellarData, selectedPlanet } = this.props.otherWorlds;

    return (
      <div>
        <Star stellarData={stellarData} />
        <Divider />
        <Planets stellarData={stellarData} selectedPlanet={selectedPlanet} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(StarSystem);

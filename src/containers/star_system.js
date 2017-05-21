import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    return (
      <div>
        <Star stellarData={this.props.otherWorlds.stellarData}/>
        <Planets  stellarData={this.props.otherWorlds.stellarData}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(StarSystem);

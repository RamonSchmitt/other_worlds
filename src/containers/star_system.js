import React, { Component } from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import _ from 'lodash';

import Star from '../components/star';
import Planets from '../components/planets';

class StarSystem extends Component {
  render() {
    const { selectedPlanet } = this.props.otherWorlds;
    let { stellarData } = this.props.otherWorlds;
    stellarData = _.sortBy(stellarData, 'pl_orbper');

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

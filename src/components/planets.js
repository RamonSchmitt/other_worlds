import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

import { nextPlanet, prevPlanet, nextDisabled } from '../actions/index';

class Planets extends Component {
  content() {
    if (this.props.stellarData.length > 0) {
      const { pl_name, pl_orbper } = this.props.stellarData[this.props.selectedPlanet];

      return (
        <div>
          <h1>{pl_name}</h1>
          <p>year</p>
          <h1>{pl_orbper.toFixed(0)} earth days</h1>
        </div>
      );
    }

    return (
      <h1>-</h1>
    );
  }

  nextEnable = () => {
    if (this.props.stellarData.length > 1) {
      return false;
    }
    return true;
  }

  next = () => {
    this.props.nextPlanet();
  }

  prevEnable = () => {
    if (this.props.selectedPlanet === 0) {
      return true;
    }
    return false;
  }

  prev = () => {
    this.props.prevPlanet();
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flexGrow: 1 }}>
          <FloatingActionButton disabled={this.prevEnable()} onClick={this.prev}>
            <ChevronLeft />
          </FloatingActionButton>
        </div>

        <div style={{ flexGrow: 1 }}>
          <p>known planets</p>
          {this.content()}
        </div>

        <div style={{ flexGrow: 1 }}>
          <FloatingActionButton disabled={this.nextEnable()} onClick={this.next}>
            <ChevronRight />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ nextPlanet, prevPlanet, nextDisabled }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets);

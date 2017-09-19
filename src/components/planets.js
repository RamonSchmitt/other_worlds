import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

class Planets extends Component {
  content() {
    if (this.props.stellarData.length > 0) {
      const planetSystem = this.props.stellarData;

      return planetSystem.map((planet) => {
        return (
          <li key={planet.pl_name}>
            <h1>{planet.pl_name}</h1>
            <p>year</p>
            <h1>{planet.pl_orbper.toFixed(0)} earth days</h1>
          </li>
        );
      });
    }

    return (
      <li>
        <h1>-</h1>
      </li>
    );
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flexGrow: 1 }}>
          <FloatingActionButton disabled={true}>
            <ChevronLeft />
          </FloatingActionButton>
        </div>

        <div style={{ flexGrow: 1 }}>
          <p>known planets</p>
          <ul>
            {this.content()}
          </ul>
        </div>

        <div style={{ flexGrow: 1 }}>
          <FloatingActionButton disabled={true}>
            <ChevronRight />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default Planets;

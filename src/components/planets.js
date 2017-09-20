import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

class Planets extends Component {
  content() {
    if (this.props.stellarData.length > 0) {
      let i = 0;
      const { pl_name, pl_orbper } = this.props.stellarData[i];

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
          {this.content()}
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

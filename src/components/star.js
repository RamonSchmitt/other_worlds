import React, { Component } from 'react';

class Star extends Component {
  content() {
    if (this.props.stellarData[0]) {
      const distance = this.props.stellarData[0].st_dist * 3.26163344;

      return (
        <div>
          <h1>{this.props.stellarData[0].pl_hostname}</h1>
          <p>distance from solar system</p>
          <h1>{distance.toFixed(2)} lightyears</h1>
        </div>
      )
    }
    return <h1>-</h1>;
  }

  render() {
    return (
      <div>
        <p>star</p>
        {this.content()}
      </div>
    );
  }
}

export default Star;

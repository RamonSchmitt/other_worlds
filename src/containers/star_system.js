import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../containers/search_bar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class StarSystem extends Component {
  renderStarSystem(starsystem) {
    const name = starsystem[0].pl_hostname;
    const distance = starsystem[0].st_dist * 3.26163344; // parsecs to lightyears
    let planets = [];

    starsystem.map((planet, index) => {
      planets.push(planet.pl_name);
    })

    return (
      <TableRow key={name}>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{distance}</TableRowColumn>
        <TableRowColumn>{planets.join(", ")}</TableRowColumn>
      </TableRow>
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Star</TableHeaderColumn>
              <TableHeaderColumn>Distance from the Sun in lightyears</TableHeaderColumn>
              <TableHeaderColumn>Planets</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.stellarData.map(this.renderStarSystem)}
          </TableBody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps({ stellarData }) {
  return { stellarData };
}

export default connect(mapStateToProps)(StarSystem);

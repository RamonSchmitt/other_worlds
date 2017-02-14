import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import StarSystem from '../containers/star_system';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <StarSystem />
      </div>
    );
  }
}

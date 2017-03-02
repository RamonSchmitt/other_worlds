import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import SearchBar from '../containers/search_bar';
import StarSystem from '../containers/star_system';

// injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>

        <StarSystem />
      </MuiThemeProvider>
    );
  }
}

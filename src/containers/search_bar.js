import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';

import AutoComplete from 'material-ui/AutoComplete';

const planets = [
  "TRAPPIST-1",
  "Proxima Cen",
  "47 UMa",
  "51 Peg",
  "55 Cnc"
];

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event);
    this.setState({ term: event });
    console.log(this.state);
    // this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchData(this.state.term);
    this.setState({ term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <AutoComplete
          floatingLabelText="search for a star"
          filter={AutoComplete.fuzzyFilter}
          dataSource={planets}
          maxSearchResults={5}
          fullWidth={true}
          searchText={this.state.term}
          onUpdateInput={this.onInputChange}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

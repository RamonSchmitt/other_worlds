import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchData } from '../actions/index';

const style = {
  margin: 12,
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      stars: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event,
      stars: [
        'TRAPPIST-1',
        'Proxima Cen',
        '47 UMa',
        '51 Peg',
        '55 Cnc',
        'Kepler-22',
      ],
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchData(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <AutoComplete
          floatingLabelText="search for a star"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.stars}
          maxSearchResults={10}
          fullWidth={false}
          searchText={this.state.term}
          onUpdateInput={this.onInputChange}
        />
        <RaisedButton label="search" primary type="submit" style={style} />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

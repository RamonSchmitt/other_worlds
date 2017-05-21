import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

import { fetchData, fetchStars } from '../actions/index';

const style = {
  margin: 12,
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchStars();
  }

  onInputChange(event) {
    this.setState({
      term: event,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchData(this.state.term);
    this.setState({ term: '' });
  }

  dataSource(stars) {
    const uniqStars = _.uniqBy(stars, 'pl_hostname');
    const starList = [];

    uniqStars.map(star => starList.push(star.pl_hostname));
    return starList;
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <AutoComplete
          floatingLabelText="search for a star"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.dataSource(this.props.otherWorlds.starList)}
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

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData, fetchStars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

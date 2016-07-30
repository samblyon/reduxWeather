import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import doSearch from '../actions/searchActions';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ""
    };
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.doSearch(this.state.query);
    this.setState({query: ''});
  }

  _onChange(e){
    this.setState({
      query: e.target.value
    });
  }

  render(){
    return(
      <form onSubmit={this._handleSubmit.bind(this)}>
        <input type="text" onChange={this._onChange.bind(this)} />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    doSearch
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import doSearch from '../actions/searchActions';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    };
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.doSearch(this.state.query);
    this.setState({ query: '' });
  }

  _onChange(e){
    this.setState({
      query: e.target.value
    });
  }

  render(){
    return(
      <form onSubmit={this._handleSubmit.bind(this)}>
        <div className="form-group">
          <label >
            Search for Weather by City
            <input
              type="text"
              onChange={this._onChange.bind(this)}
              value={this.state.query}
              className="form-control"/>
          </label>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doSearch: (query) => {
      doSearch(query)
      .then(response => {
        console.log(response);
        dispatch({
          type: "RESULTS_RECEIVED",
          payload: response.data
        });
      })
      .catch( error => console.log(error));
    }
  }
};
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     doSearch
//   }, dispatch);
// };

// maps the dispatch method of the store to the callback props of the component;
// returns the callback props that the presentational component (SearchBar) needs

// this describes the container component so well that instead of writing it
// we can generate it using connect, which takes care of subscribing to the store, etc.


export default connect(null, mapDispatchToProps)(SearchBar);

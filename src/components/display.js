import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
  render(){
    return(
      <div>{this.props.weather}</div>
    );
    //Map
    //Chart
  }
}

const mapStateToProps = state => {
  return { weather: state.weather };
};

export default connect(mapStateToProps)(Display);

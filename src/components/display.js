import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart'

const getTemps = (report) => {
  return report.list.map((dataPoint) => {
    return dataPoint.main.temp - 273.15;
  });
}

class Display extends Component {
  render(){
    const cities = this.props.weather.map(report => {
      return (
        <div key={report.city.name}>
          {report.city.name}
          <Chart data={getTemps(report)} />
        </div>
      );
      //Map
    });
    return(
      <div>{cities}</div>
    );
  }
}

const mapStateToProps = state => {
  return { weather: state.weather };
};

export default connect(mapStateToProps)(Display);

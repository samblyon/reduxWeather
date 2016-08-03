import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import Map from './map';

const getTemps = (report) => {
  return report.list.map((dataPoint) => {
    return dataPoint.main.temp - 273.15;
  });
}

class Display extends Component {
  weatherRow(report){
    return(
      <tr key={report.city.name}>
        <td>{report.city.name}</td>
        <td>
          <Map
            lat={report.city.coord.lat}
            lng={report.city.coord.lon}
          />
        </td>
        <td><Chart data={getTemps(report)} /></td>
      </tr>
    );
  }

  render(){
    const cities = this.props.weather.map(report => {
      return this.weatherRow(report);
    });

    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Location</th>
            <th>Temperature (C)</th>
          </tr>
        </thead>
        <tbody>
          {cities}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     remove: (city) => remove(city)
//   };
// }

export default connect(mapStateToProps, null)(Display);

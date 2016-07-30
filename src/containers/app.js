import React, { Component } from 'react';
import Display from '../components/display';
import SearchBar from '../components/search_bar';

class App extends Component {
  render(){
    return (
    <div>
      <SearchBar />
      <Display />

    </div>);
  }
}
//search bar

export default App;

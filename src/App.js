import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header.js';
import TripList from './containers/TripList.js'
import TripDetailsContainer from './containers/TripDetailsContainer.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TripList />
        <TripDetailsContainer />
      </div>
    );
  }
}

export default App;

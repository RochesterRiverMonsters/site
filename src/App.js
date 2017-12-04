import React, { Component } from 'react';
import {SplashPage} from './SplashPage';
import {NavBar} from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <SplashPage/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>tick... tack... toe!</h1>
          <Game />
        </header>
      </div>
    );
  }
}

export default App;

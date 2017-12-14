import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Counter from '../containers/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Redux Counter</h1>
        </header>

        <Counter />
      </div>
    );
  }
}

export default App;

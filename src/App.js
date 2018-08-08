import React, { Component } from 'react';
import { Routes, AuthList } from './component'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AuthList history={this.props.history}/>
        < Routes />
      </div>
    );
  }
}

export default App;

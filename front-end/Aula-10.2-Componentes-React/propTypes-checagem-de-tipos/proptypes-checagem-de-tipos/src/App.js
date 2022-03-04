import React, { Component } from 'react';
import './App.css';
import Greeting from './Greeting';

class App extends Component {
  render() {
    return(
      <div >
        <Greeting name='Washington' lastName='Lima Ferreira' />
    </div>
    );
  }
}

export default App;

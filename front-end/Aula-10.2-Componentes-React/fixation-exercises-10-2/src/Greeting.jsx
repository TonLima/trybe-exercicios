import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return(
      <h1 className='App'>Hello, {this.props.name} {this.props.lastName}</h1>
    );
  }
}

export default Greeting;
import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  render() {
    return (
      <div >
      	<input className="Input" type="text" placeholder="Hello World"/>
      </div>
    );
  }
}

export default Input;
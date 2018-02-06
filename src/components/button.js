import React, { Component } from 'react';
import './button-component.css';

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <input type="button" value="hello world" />
      </div>
    );
  }
}

export default Button;
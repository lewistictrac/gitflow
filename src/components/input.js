import React, { Component } from 'react';
import './input.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.props.onValueChange(event.target.value);
  }

  render() {
    return (
      <div >
      	<input className="Input" type="text" value={this.props.value} onChange={this.handleChange} placeholder="Giphy keyword"/>
      </div>
    );
  }
}

export default Input;
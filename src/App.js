import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button.js';
import Input from './components/input.js';
import Title from './components/title.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - with hot fix</h1>
        </header>
        <Title/>
        <Button/> 
        <Input/>
      </div>
    );
  }
}

export default App;

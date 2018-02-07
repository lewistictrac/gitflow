import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button.js';
import Input from './components/input.js';
import Title from './components/title.js';
import Giphy from './components/giphy.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleGiphyKeywordChange = this.handleGiphyKeywordChange.bind(this);
    this.state = {
      giphyKeyword: 'dog'
    };
  }

  handleGiphyKeywordChange(giphyKeyword) {
    this.setState({
      giphyKeyword: giphyKeyword
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - with hot fix</h1>
        </header>
        <Title/>
        <Button/> 
        <Input value={this.state.giphyKeyword} onValueChange={this.handleGiphyKeywordChange}/>
        <Giphy apiKey="dc6zaTOxFJmzC" keyword={this.state.giphyKeyword}/>
      </div>
    );
  }
}

export default App;

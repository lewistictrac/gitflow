import React, { Component } from 'react';

class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: '',
      caption: ''
    };
  }

  static defaultProps = {
    apiKey: 'dc6zaTOxFJmzC',
    keyword: 'cat'
  }

  loadImage() {
    let self = this;
    let url = '//api.giphy.com/v1/gifs/random?api_key=' + this.props.apiKey + '&tag=' + this.props.keyword;

    fetch(url).then(function(response){
      response.json().then((data) => {
        self.setState({
          imageSrc: data.data.image_url,
          caption: data.data.caption
        });
      });
    });
  }
  
  componentDidMount() { 
    this.loadImage(); 
  }

  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <img src={this.state.imageSrc} alt={this.state.caption} style={{maxWidth: '90%', maxHeight:'400px'}}/> 
      </div>
    );
  }
}

export default Giphy;
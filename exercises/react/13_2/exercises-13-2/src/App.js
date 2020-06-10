import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: '',
    }
    this.newImage = this.newImage.bind(this)
  }

  componentDidMount() {
    this.newImage();
  }

  newImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(data => data.json())
    .then(picture => {
      this.setState({ image: picture})
      localStorage.setItem('Dog', picture.message)
    })
  }

  render() {
    const { image } = this.state;
    if (image === '') return "Loading ..."
    return (
      <div className="App-header">
        <img src={image.message} alt="Imagem de cachorro" height="300px" />
        <button onClick={this.newImage}>Próxima Foto</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class DogPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      picture: '',
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            picture: result.message
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, picture } = this.state;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       <div>
         <img src={picture} height="200px" alt="Imagem de um cachorro" /><br />
         <button>Próxima foto</button>
       </div>
      );
    }
  }
}

// O APP deve ter uma função passada como onClick ao compenente button.
// Essa função vai atualizar as novas props do componente DOG
//

export default DogPicture;
import React, { Component } from 'react';
import MyList from './MyList';
import ShowButton from './ShowButton';
import Picture from './Picture';
import PicturesList from './PicturesList';
import data from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Minha Lista de Componentes',
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  render() {
    return (
      <div className="main">
        <h1>{this.state.title}</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <ShowButton changeTitle={this.changeTitle} value="Título Show" />
          <PicturesList>
           {data}
          </PicturesList>
        </MyList>
      </div>
    );
  }
}
export default App;

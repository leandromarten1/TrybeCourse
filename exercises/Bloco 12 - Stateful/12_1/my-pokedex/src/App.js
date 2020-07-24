import React from 'react';
import './App.css';
import pokemonsObjs from './data';
import Pokedex from './components/Pokedex/Pokedex';
import AddPokeButton from './components/AddPokeButton/AddPokeButton';
import TypesButtons from './components/TypesButtons/TypesButtons';

let indexOfPoke = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [pokemonsObjs[indexOfPoke]],
      pokemonsArray: pokemonsObjs,
      buttonDisabled: false,
    };
  }

  nextPoke = () => {
    if (indexOfPoke === this.state.pokemonsArray.length - 1) indexOfPoke = -1;
    indexOfPoke += 1;
    this.setState({
      pokemon: [this.state.pokemonsArray[indexOfPoke]],
    });
  };

  filterType = (typeButton) => {
    indexOfPoke = 0;
    if (typeButton === 'All') {
      return this.setState({
        pokemonsArray: pokemonsObjs,
        buttonDisabled: false,
        pokemon: [pokemonsObjs[0]],
      });
    }
    const filteredArray = pokemonsObjs.filter(
      ({ type }) => type === typeButton,
    );
    this.setState({
      pokemonsArray: filteredArray,
      pokemon: [filteredArray[0]],
    });
    if (filteredArray.length <= 1) {
      this.setState({
        buttonDisabled: true,
      });
    } else {
      this.setState({
        buttonDisabled: false,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Pokedex pokemons={this.state.pokemon} />
        <TypesButtons handleClick={this.filterType} pokemons={pokemonsObjs} />
        <br />
        <AddPokeButton
          handleClick={this.nextPoke}
          buttonDisabled={this.state.buttonDisabled}
        />
      </div>
    );
  }
}

export default App;

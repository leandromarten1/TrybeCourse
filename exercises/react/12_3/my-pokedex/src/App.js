import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import Button from './components/Button';
import TypeButton from './components/TypeButton';

let totalPokes = 1;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [pokemons[0]],
    };
  }

  nextPokemon = () => {
    if (totalPokes < pokemons.length) {
      this.setState({
        pokemon: [pokemons[totalPokes]],
      });
      totalPokes += 1
    } else {
      totalPokes = 1;
      this.setState({
        pokemon: [pokemons[0]],
      });
    }    
  }

  render() {
    return (
      <div className="App">
        <header> POKEDEX - leandromarten1 </header>
        <div className="pokedex">
          <Button click={this.nextPokemon} />
          <Pokedex allPokdemons={this.state.pokemon} />
          <TypeButton type="Fire" />
          <TypeButton type="Psychic" />
        </div>
      </div>
    );
  }
}

export default App;

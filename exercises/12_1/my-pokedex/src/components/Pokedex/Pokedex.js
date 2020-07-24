import React from 'react';
import './Pokedex.css';
import Pokemon from '../Pokemon/Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map((poke) => (
          <Pokemon key={poke.id} pokemon={poke} />
        ))}
      </div>
    );
  }
}

export default Pokedex;

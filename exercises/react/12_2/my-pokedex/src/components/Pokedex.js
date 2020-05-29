import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {

    const { allPokdemons } = this.props;
    return (
      <div>
        { allPokdemons.map(e => <Pokemon key={e.id} pokemon={e}/> ) }
      </div>
    )
  }
}
export default Pokedex;
import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';


function App() {
  return (
    <div className="App">
      <header> POKEDEX - leandromarten1 </header>
      <div className="pokedex">
       <Pokedex allPokdemons={pokemons} />
      </div>
    </div>
  );
}

export default App;

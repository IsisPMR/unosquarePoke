import React from 'react';
import Search from './Components/search';
import PokeList from './Components/pokeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      
     <Search /> 

     <PokeList />
    </div>
  );
}

export default App;

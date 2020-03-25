import React, { Component } from "react";
import "./search.css";
/* import CatchPokemons from './Components/CatchPokemons'; */

export default class Search extends Component {
    
    fecthPokemon(pokeName){
        let pokemons = []; 
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(response => response.json())
          .then(pokemon => {
            console.log(pokemon.id,pokemon.name,pokemon.sprites.front_default)
            pokemons.push(pokemon)
          })
    }
          
  render() {
    return (
      <div>
        <h2>Welcome!, looking for pokemons? click here: </h2>
        <input label="Search"></input>
        <button className="catchButton" onClick={this.fecthPokemon('charmeleon')}>Catch!</button>
      </div>
    );
  }
}

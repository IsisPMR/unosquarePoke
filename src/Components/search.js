import React, { Component } from "react";
import "./search.css";
/* import CatchPokemons from './Components/CatchPokemons'; */

export default class Search extends Component {

    fecthPokemon(pokeName){
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(response => response.json())
          .then(pokemon => {
            console.log(pokemon)
            return pokemon
          })
    }
          
  render() {
    return (
      <div>
        <h2>Welcome!, looking for pokemons? click here: </h2>
        <input label="Search"></input>
        <button className="catchButton" onClick={this.fecthPokemon('pikachu')}>Catch!</button>
      </div>
    );
  }
}

/* .name, pokemon.id, pokemon.front_default */
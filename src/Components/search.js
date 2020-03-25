import React, { Component } from "react";
import "./search.css";

export default class Search extends Component {
    constructor(props){
      super(props);
      this.state = {
        text: "EmptyList"
      }
    }

    showPokemons(pokemons){
      this.setState({
        pokemons: []
      });
    }

    fetchPokemon(pokeName){
           fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(response => response.json())
          .then(pokemon => {
            console.log(pokemon.id,pokemon.name,pokemon.sprites.front_default)
            this.setState.pokemons.push(pokemon)
          })
    }
          
  render() {
    const { pokemons } = this.state;
    console.log(pokemons)
    return (
      <div>
        <h2>Welcome!, looking for pokemons? click here: </h2>
        <input label="Search"></input>
        <button className="catchButton" onClick={this.showPokemons().bind(this)}>Catch!</button>
      </div>
    );
  }
}
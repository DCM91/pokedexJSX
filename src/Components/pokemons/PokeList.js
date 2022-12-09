import React, { Component } from "react";
import axios from "axios";
import PokeId from "./PokeId";

export default class PokeList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=-1",
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon) => (
              <PokeId
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokes...</h1>
        )}
      </div>
    );
  }
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const Generation1 = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      for (let i = 1; i < 152; i++) {
        const response = await axios.get(`${API_URL}/${i}`);
        const pokemon = {
          id: response.data.id,
          name: response.data.name,
          type: response.data.types.map((type) => type.type.name.slice(0, 1).toUpperCase() + type.type.name.slice(1)).join(' - '),
          imageUrl: response.data.sprites.front_default,
          index: response.data.id,
        };
        setPokemons((prevPokemons) => [...prevPokemons, pokemon]);
      }
    }
    getPokemons();
  }, []);

  return (
    <GenStyle>
      <div className="row">
        {pokemons.map((pokemon) => (
          <div className="card" key={pokemon.id}>
            <h4>Nº {pokemon.index}</h4>
            <div className="mid">
              <img src={pokemon.imageUrl} alt={pokemon.name} className="pokePhoto" />

              <h4>
                Type:{" "}
                {pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}
              </h4>
            </div>
            <h3>
              {" "}
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h3>
          </div>
        ))}
      </div>
    </GenStyle>
  );
};

const GenStyle = styled.div`
  .mid {
    display: flex;
    flex-direction: row;
    padding-bottom: 0.5rem;
    align-items: center;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
    
  }
  .row {
    min-height: 90vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 15px;
    justify-content: center;

    padding: 25px;
    padding-top: 7rem;

    row-gap: 5px;
  }
  .card {
    padding: 0.5px 4px;
    text-align: center;
    border-radius: 5%;
    box-shadow: 0 3px 5px #312f30;
    background-color: #312f30;
    color: #f2f2f2;
    width: 25rem;
    height: auto;
    margin: 10px;
  }
  h3 {
    background-color: #f2f2f2;
    border-radius: 5%;
    box-shadow: 1px 1px 1px 1px;
    width: 80%;
    margin-top: 0.4rem;
    color: #fda038;
    margin-right: 10%;
    margin-left: 10%;
  }
  .pokePhoto {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    box-shadow: 2px 2px 1px 1px #fda038;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    background-color: #f2f2f2;
    margin-left: 5%;
    margin-right: 4rem;
    padding: 0.1rem;
  }
`;

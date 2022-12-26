import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const Generation2= () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      for (let i = 152; i < 251; i++) {
        const response = await axios.get(`${API_URL}/${i}`);
        const pokemon = {
            id: response.data.id,
          name: response.data.name,
          type: response.data.types.map(type => type.type.name).join(' - '),
          imageUrl: response.data.sprites.front_default,
          index: response.data.id
        };
        setPokemons(prevPokemons => [...prevPokemons, pokemon]);
      }
    }
    getPokemons();
  }, []);

  return (
    <GenStyle>
        <div className='row'>
            {pokemons.map(pokemon => (
                <div className='card' key={pokemon.id}>
                    <p>Nº {pokemon.index}</p>
                    <div className='mid'>
                        <img src={pokemon.imageUrl} alt={pokemon.name} />

                        <h4>Type: {pokemon.type}</h4>

                    </div>
                    <h3>{pokemon.name}</h3>
                    
                    
                </div>
            ))}
        </div>
    </GenStyle>
  );
}

const GenStyle = styled.div`
.mid{
    display: flex;
    flex-direction: row;
    padding-bottom: .5rem;
    align-items: center;
    justify-content: center;
}
.row{
    min-height: 90vh;
    display: flex;
    flex-wrap: wrap;  
    align-items: center;
    margin: 15px;

    padding: 25px;
    padding-top: 7rem;

    row-gap: 5px;
}
.card{  
    padding: 0.5px 5px;
    text-align: center;
    border-radius: 5%;
    box-shadow: 0 3px 5px #312f30;
    background-color: #312f30;
    color: #f2f2f2;
    width: 25rem;
    height: auto;
    margin: 10px;
   
    
}
h3{
    background-color: #f2f2f2;
    border-radius: 5%;
    box-shadow: 1px 1px 1px 1px;
    width: 80%;
    margin-top: .4rem ;
    color: #fda038 ;
    margin-right: 10%;
    margin-left: 10%;
    
}
img{
    
    width: 4em;
    height: 4em;
    border-radius: 50%;
    box-shadow: 2px 2px 1px 1px #fda038;
    margin-top: .2rem ;
    margin-bottom: .2rem;
    background-color: #f2f2f2;
    margin-left: 5%;
    margin-right: 4rem;
}
`;
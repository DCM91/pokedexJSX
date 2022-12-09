import React, { Component } from 'react'
import PokeList from '../pokemons/PokeList'

export default class Dashborad extends Component {
  render() {
    return (
      <div className='rows'>
        <div className="col">
          <PokeList />
        </div>
        
      </div>
      )
  }
}

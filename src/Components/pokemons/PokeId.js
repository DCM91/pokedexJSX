import React, { Component } from 'react'
import "./PokeId.css"


export default class PokeId extends Component {
  state = {
    name :"",
    imageUrl:"",
    index : ""
  };

  componentDidMount(){
    const {name, url} = this.props;
    const index = url.split("/")[url.split("/").length-2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;
    
    this.setState({
      name: name,
      index: index,
      imageUrl: imageUrl
    });
  }

  



  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-3">
        <div className='card'>
          <h2>{this.state.index}</h2>
          <img src= {this.state.imageUrl} alt='' />
          
            <div className='cardHeader'>
                <h4> {this.state.name.charAt(0).toUpperCase()+this.state.name.slice(1) }</h4>
            </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from "react";
import "./PokeId.css";

export default class PokeId extends Component {
  state = {
    name: "",
    type: "",
    imageUrl: "",
    index: "",
  };

  componentDidMount() {
    const { name, url, type } = this.props;
    //const type = this.props.types[0].type.name
    const index = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`;

    this.setState({
      name: name,
      index: index,
      type: type,
      imageUrl: imageUrl,
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-3">
        <div className="card">
          <h3>Nº - {this.state.index}</h3>
          <span>
            <img src={this.state.imageUrl} alt="" />
            <h4>{this.state.type}</h4>
            <div className="cardHeader">
              <h4>
                {" "}
                {this.state.name.charAt(0).toUpperCase() +
                  this.state.name.slice(1)}
              </h4>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

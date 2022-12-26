import React, { useState } from "react";
import Burger from "./component/Burger";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import { Contact } from "../MyRoutes/contact/Contact";
import { Generation2 } from "../MyRoutes/contact/Generation/Generation2";



export default function NavBar(props) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {setClicked(!clicked)}
  
    return (
      <div>
        <NavStyle>
          <nav className="navbar navbar-dark fixed-top">
          <Link to="/"><img alt="../img/Pokédex_logo.png" src={require("../img/Pokédex_logo.png")}/></Link>
            
            <div className="burger">
              <Burger clicked={clicked} handleClick={handleClick}/>
            </div>
            <div className={`navlink ${clicked ? 'active' : ''}`}>
              <span href="/">
                <Link to="/Generation2">Generation2</Link>
              </span>
              <span href="/">
                <Link to="/Contact">Contact</Link>
              </span>
              <span href="/">Search</span>
            </div>

          </nav>
          <div>
            <Routes>
              <Route path="Generation2" element={<Generation2 />} />
              <Route path="Contact" element={<Contact />} />
            </Routes>
          </div>
        </NavStyle>
      </div>
    );
  }

const NavStyle = styled.nav`

@font-face {
  font-family:"Pokemon Solid Normal"; 
  src:  url("pokemonsolid.eot?") format("eot"),
        url("pokemonsolid.woff") format("woff"),
        url("pokemonsolid.ttf") format("truetype"),
        url("pokemonsolid.svg#PokemonSolidNormal") format("svg");
}

.navbar{
  color: #fff;
  display: flex;
  padding: 1rem 3rem;
  
  font-weight: bold;
  align-items: center;  
}
span{
  margin-right: 1rem;
  justify-content: space-between;
  color: #fff;
  text-decoration: none;
  justify-items: flex-end;
  
}

/*
Link{
  text-decoration: none;
  color: #fff;
}
*/


img{
  width: 6.8rem;
  height: 3rem;
  border-radius: 0;
  box-shadow: 0 0 0;
  margin-top: .2rem ;
  background-color: transparent;
  margin-right: .1rem
}
h2{
 justify-content: flex-start;
  color: yellowgreen;
  padding-left: 1rem;
  font-family: "Pokemon Solid Normal", woff;
  font-weight: bold;
  
}


.navlink{
  position: absolute;
  top: -700px;
  left: -2000px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  span{
    display: block;
  }

  @media(min-width: 750px){
    position: initial;
    margin: 0;
    span{
      display: inline;

    }
  }
}
.navlink.active{
  width: 100%;
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
}

.burger{
  @media(min-width: 750px){
      display: none;
      
  }     
}
`

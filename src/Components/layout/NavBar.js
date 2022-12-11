import React, { useState } from "react";
import Burger from "./component/Burger";
import styled from "styled-components";



export default function NavBar(props) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {setClicked(!clicked)}
  
    return (
      <div>
        <NavStyle>
          <nav className="navbar navbar-expands-md navbar-dark fixed-top">
            <h2>Pokedex</h2>
            <div className="burger">
              <Burger clicked={clicked} handleClick={handleClick}/>
            </div>
            <div className={`navlink ${clicked ? 'active' : ''}`}>
              <span href="/">Generation</span>
              <span href="/">Contact</span>
              <span href="/">Search</span>
            </div>

          </nav>
        </NavStyle>
      </div>
    );
  }

const NavStyle = styled.nav`
.navbar{
  color: #fff;
  display: flex;
  padding: 1rem;
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
h2{
  justify-content: flex-start;
  color: yellowgreen;
  padding-left: 1rem;
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
  margin-righ: auto;
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

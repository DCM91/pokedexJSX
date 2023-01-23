import React, { useState } from "react";
import Burger from "./component/Burger";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import { Contact } from "../MyRoutes/contact/Contact";
import { Search } from "../MyRoutes/contact/Search";
import { Generation8 } from "../MyRoutes/contact/Generation/Generation8";
import { Generation7 } from "../MyRoutes/contact/Generation/Generation7";
import { Generation6 } from "../MyRoutes/contact/Generation/Generation6";
import { Generation5 } from "../MyRoutes/contact/Generation/Generation5";
import { Generation4 } from "../MyRoutes/contact/Generation/Generation4";
import { Generation3 } from "../MyRoutes/contact/Generation/Generation3";
import { Generation2 } from "../MyRoutes/contact/Generation/Generation2";
import { Generation1 } from "../MyRoutes/contact/Generation/Generation1";
import { Dropdown, DropdownButton, Button } from 'react-bootstrap'; 


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
            </div >
            <div className={`navlink ${clicked ? 'active' : ''}`}>
              <div className="navComponents">
                <div className="buttonB">
                  <DropdownButton id="dropdown-menu" title="Generation">
                  <Dropdown.Item>
                      <Link to="/" >Generation1</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/Generation2" >Generation2</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/Generation3" >Generation3</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/Generation4" >Generation4</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/Generation5" >Generation5</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/Generation6" >Generation6</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/Generation7" >Generation7</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/Generation8" >Generation8</Link>
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
                <div className="buttonB">
                  <Button href="/Contact" >
                    <Link to="/Contact" >Contact</Link>
                  </Button>
                </div>
                <div className="buttonB">
                  <Button as={Link} to="/Search" >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          <div>
            <Routes>
              <Route path="/" element={<Generation1 />} />
              <Route path="/Generation2" element={<Generation2 />} />
              <Route path="/Generation3" element={<Generation3 />} />
              <Route path="/Generation4" element={<Generation4 />} />
              <Route path="/Generation5" element={<Generation5 />} />
              <Route path="/Generation6" element={<Generation6 />} />
              <Route path="/Generation7" element={<Generation7 />} />
              <Route path="/Generation8" element={<Generation8 />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Search" element={<Search />} />
              <Route path="*" element={<Generation1 />} />
            </Routes>
          </div>
        </NavStyle>
      </div>
    );
  }

const NavStyle = styled.nav`

.navbar{
  color: #fff;
  display: flex;
  padding: .2rem 1rem;
  font-weight: bold;
  align-items: center;  
  position: fixed;
}

.navComponents{
  display: flex;
  flex-direction: row;
  vertical-align: baseline;
  justify-content: space-between;
  position: relative ;
 
}

.buttonB{
  display: inline-flex;
  width: 6.5rem;
  justify-content: space-between;
  height: 2.2rem;
  margin: 2rem;
  margin-right: 4rem;
  padding-right: 2rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

}
a{
  text-decoration: none;
  border: #242635;
  
  color: #242635;

}
button{
  border: solid #242635;
  color: #242635;
  background-color: #f79f1a;
}

img{
  width: 6.8rem;
  height: 3rem;
  border-radius: 0;
  box-shadow: 0 0 0;
  margin-top: .2rem ;
  background-color: transparent;
  margin-right: .1rem
}



.navlink{
  position: absolute;
  top: -700px;
  left: -2000px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  .navComponents{
    display: flex;
    flex-direction: column;
    width: 7rem;
    justify-content: space-around;
  }
  .buttonB{
    margin: .2rem;
  }

  @media(min-width: 750px){
    position: initial;
    margin: 0;
    
    .navComponents{
      display: inline;
      
      justify-content: space-around;
    }
    .buttonB{
    margin: 1rem;
    margin-bottom: 1.2rem;
    }
    .dropdown{
      right: 2.2rem;
      width: 10rem;
      height: 2.2rem;
      bottom: .2rem;
      
    }
  }
}
.navlink.active{
  width: 100%;
  display: flexbox;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  top: 40%;
  left: 40%;
  right: 40%;
  text-align: center;
}

.burger{
  @media(min-width: 750px){
      display: none;
      
  }     
}
`
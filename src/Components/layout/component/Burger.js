import React from 'react'
import styled from "styled-components"

export default function Burger(props) {
  return (
    <BurgerStyle>
        <div  className={`btn btn ${props.clicked ? 'active' : ''}`} 
              onClick={props.handleClick}
              >
            <span></span>	
            <span></span>	
            <span></span>	
        </div>
    </BurgerStyle>
  )
}

const BurgerStyle = styled.div`
    .btn {
    position: relative;
    transform:translate(-50%,-50%);
    margin-right: .2rem;
    top: 1.5rem;
    left : 3  rem;
    }
    .btn span {
    position:relative;
    top:.4rem;
    display:block;
    background:#eee;
    width:40px;
    height:5px;
    margin:5px 0px;
    cursor:pointer;
    transition:transform 300ms linear 0ms,top 250ms ease-in-out 350ms;
    }
    .btn.active span:nth-child(1) {
    top: 10px;
    transform:rotate(45deg);
    transition:top 300ms linear 0ms,transform 250ms ease 300ms;
    }
    .btn.active span:nth-child(2) {
    opacity:0;
    transition:all 50ms ease 350ms;
    }
    .btn.active span:nth-child(3) {
    top: -10px;
    transform:rotate(-45deg);
    transition:top 300ms linear 0ms,transform 250ms ease 300ms;
    }
`

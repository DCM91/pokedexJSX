import React from "react";
import { Generation1 } from "./Generation/Generation1";
import styled from "styled-components";

export const Contact = () => {
  return (

      <>
      <ContStyle>
        <div className="info">
          <h1>Contact Info:</h1>
          <ul>
            <a href="https://www.linkedin.com/in/dcm91/" ><li>https://www.linkedin.com/in/dcm91/</li></a>
            <a href="https://github.com/DCM91" ><li>https://github.com/DCM91</li></a>
            <li>castromartindaniel91@gmail.com</li>
          </ul>
      </div>
    </ ContStyle>

    <Generation1 /></>

  );
};

const ContStyle = styled.div`
.info{
  display: flex;
  margin-left: 1.5rem;
  margin-top: 130px;
  margin-bottom: -8.2rem;
  height: auto;
  width: 80%;
  justify-tracks: center;
  justify-items: center;
}
h1{
  color: #fee4e5;
  font-style: italic;
  font-family: fantasy;
  font-size: x-large;
}
li{
  font-size: small;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #312F30;
  
}
a{
  text-decoration: none;
}
`
import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <ContactStyle>
      <div>
        <h1>Contact Info</h1>
        <ul>
          <li>https://www.linkedin.com/in/dcm91/</li>
          <li>https://github.com/DCM91</li>
          <li>castromartindaniel91@gmail.com</li>
        </ul>
      </div>
    </ContactStyle>
  );
};
const ContactStyle = styled.div`

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6rem;
    
}

`;

import React from 'react'
import styled from 'styled-components'

export const Search = () => {
  return (
    <SearchStyle>
    <div>
        <form>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" />
            <button class="btn btn-outline-success my-2 my-sm-" type="submit">Search</button>
        </form>
    </div>
    </SearchStyle>
  )
}

const SearchStyle = styled.div`

 width: 70%;
 padding-top: 7.6rem;
 display: flex;
 flex-direction: row;
 justify-content: center;

 form{
    display: flex;
    flex-direction: row;
    margin-right: 1rem;
 }
 input{
    margin-right: 1rem;

 }
`
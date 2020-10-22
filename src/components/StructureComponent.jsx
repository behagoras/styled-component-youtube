import React from 'react'
import styled from 'styled-components';

const StructureComponentStyled = styled.div`
  background: white;
  border-radius: 0 0 0 25px;
  padding: 25px;
  header {
    background: gray;
    text-align: center;
    padding: 16px;
  }
  ul {
    li {
      
    }
  }
`

export default function StructureComponent() {
  return (
    <StructureComponentStyled>
      <div>
        <header>
          Bulbasaur
        </header>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"></img>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </StructureComponentStyled>
  )
}

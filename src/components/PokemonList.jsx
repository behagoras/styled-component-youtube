import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Pokemon from './Pokemon'

import {setBackground} from '../styled/mixins'

const PokemonListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${(props) => props.theme.space * 2}px;
  ${(props) => setBackground(props.theme.colors.primary)};
  padding: 16px;
`

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([])
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((data)=>data.json())
      .then((results)=>setPokemons(results.results))
  },[null])
  return <PokemonListWrapper>
    {pokemons.map((pokemon)=><Pokemon url={pokemon.url}></Pokemon>)}
  </PokemonListWrapper>
}
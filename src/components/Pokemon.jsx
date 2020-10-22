import React, {useState,useEffect} from 'react'
import styled, {css} from 'styled-components';
import {setBackground} from '../styled/mixins'

const Name = styled.h2`
  ${props=>setBackground(props.theme.colors.gray)}
  text-align: center;
`

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
`

const attackListMixin = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${(props) => props.theme.space * 2}px;
`

const AttackList = styled.ul`
  ${attackListMixin}
`

const Attack = styled.li`
  ${({eggMove,theme})=>setBackground(eggMove ? theme.colors.primary : theme.colors.secondary)}
  color: ${props=>props.theme.colors.text};
  list-style-type: none;
  padding: ${props=>props.theme.space}px;
`

const PokemonWrapper = styled.div`
  background: white;
  border-radius: 0 0 0 25px;
  padding: 24px;
`

const GreenPokemonWrapper = styled(PokemonWrapper)`
  border: 4px solid green;
`



export default function Pokemon({url, className}) {
  const [pokemon, setPokemon] = useState({})
  useEffect(()=>{
    fetch(url)
      .then((data)=>data.json())
      .then((results)=>setPokemon(results))
  },[url])
  // console.log(pokemon)
  return (
    <GreenPokemonWrapper className={className}>
      <Name>{pokemon.name}</Name>
      <Image src={pokemon?.sprites?.front_default} />
      <AttackList>
        {pokemon.moves?.map(
          ({move={}, version_group_details}, index)=>index<4 
            && (
              <Attack
                eggMove={index===0}
              >
                {move?.name}
              </Attack>)
            )}
      </AttackList>
    </GreenPokemonWrapper>
  )
}

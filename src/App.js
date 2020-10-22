import React, {useState} from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import PokemonList from './components/PokemonList';
import theme from './styled/theme'
import darkTheme from './styled/darkTheme'
import GlobalStyle from './styled/GlobalStyle'
import Pokemon from './components/Pokemon'

const CustomPokemon = styled(Pokemon)`
  background: black;
  width: 25%;
  img{
    border: 1px solid white;
    margin: 0 auto;
    width: fit-content;
  } 
`

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <div className="App">
        <GlobalStyle />
        <button onClick={()=>{
          setIsDark(!isDark)
        }}>Toggle Dark Mode</button>
        <PokemonList></PokemonList>
      </div>
      <CustomPokemon url="https://pokeapi.co/api/v2/pokemon/150/"></CustomPokemon>
    </ThemeProvider>
  );
}

export default App;

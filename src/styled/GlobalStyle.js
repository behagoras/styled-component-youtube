import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props=>props.theme.colors.primary};
    font-family: ${props=>props.theme.fonts.font1};
  }
`

export default GlobalStyle

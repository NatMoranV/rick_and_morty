import { createGlobalStyle } from "styled-components"
import BackgroundImage from "../img/Background2.jpg";


export const LightTheme = {
      primary: '#10a60c',
      secondary: '#6BDFFF',
      third: '#559CBD',
      extra: '#FF6314',
      text: '#000',
      red: 'red',
      background: 'rgba(255, 255, 255, 0.4)',
      shadow: 'rgba(0, 0, 0, 0.1)',
      border: 'rgba(255, 255, 255, 0.5)',
      shadowHover: 'rgba(0, 0, 0, 0.3)',
      body: '#fff',
    }
export const DarkTheme = {
      primary: '#10a60c',
      secondary: '#6BDFFF',
      third: '#559CBD',
      extra: '#FF6314',
      text: '#FFF',
      red: 'red',
      background: 'rgba(0, 0, 0, 0.4)',
      shadow: 'rgba(0, 0, 0, 0.3)',
      border: 'rgba(0, 0, 0, 0.5)',
      shadowHover: 'rgba(0, 0, 0, 0.5)',
      body: '#000',
    }

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  font-family: 'Shadows Into Light', cursive;
font-family: 'Space Mono', monospace;
color: ${(props) => props.theme.text};
}

body{
    background-color: ${(props => props.theme.body)};
    background-image: url(${BackgroundImage});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
 
}

h1{
  margin: 1em;
  text-align: center;
  font-size: 4em;
}

h6{
  font-size: 1.5em;
}

span{
  font-size: 1.1em;
}

picture{
  display: flex;
  width: 10%;
  min-width: 40px;
}

#logo{
    max-width: 10em;
    min-width: 1vw;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`
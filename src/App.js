import "./App.css";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import { useState } from "react";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";

import { About } from "./components/About/About";
import { Detail } from "./components/Detail/Detail";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    dark:{

    },
    light:{
      primary: '#6cbe23',
      secundary: '#e8e488',
      third: '#382e1b',
      extra: '#a9d4d7',
      red: 'red'
    }
  }
  const [characters, setCharacters] = useState([]);

  function onClose(id) {
    const filtrados = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filtrados);
  }

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (!characters.some((character) => character.id === parseInt(id))) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert(
            `¡El ID ${id} ya fue solicitado, recuerda que no puedes agregar repetidos!`
          );
        }
      })
      .catch((error) => {
        console.error(error);
        window.alert(
          `¡El ID ${id} no está disponible, ingresa un ID numérico entre el 1 y el 826!`
        );
      });
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<CardsGrid onClose={onClose} characters={characters}/>}
        />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;

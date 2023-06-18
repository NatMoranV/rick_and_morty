import "./App.css";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/NavBar/NavBar";
import {  Route, Routes, useNavigate } from "react-router-dom";
import { Form } from "./components/Form/Form";
import { About } from "./components/About/About";
import { Detail } from "./components/Detail/Detail";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyle } from "./assets/themes/themes";
import Favorites  from "./components/Favorites/Favorites";


function App() {
  // const theme = {
  //   dark: {},
  //   light: {
  //     primary: "#10a60c",
  //     secondary: "#6BDFFF",
  //     third: "#559CBD",
  //     extra: "#FF6314",
  //     text: "#FFF",
  //     red: "red",
  //   },
  // };

  const [theme, setTheme] = useState('light');
  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@mail.com';
  const PASSWORD = 'password1';

  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  
  const login = (userData) => {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
     }
  }

  const logout = () => {
		setAccess(false)
  }


  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    const filtrados = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filtrados);
  }

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
    <GlobalStyle/>
      <div className="App">
 
          <Nav onSearch={onSearch} logout={logout} />
      
        <Routes>
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<CardsGrid onClose={onClose} characters={characters} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
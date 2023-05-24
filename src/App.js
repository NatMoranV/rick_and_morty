import "./App.css";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import { useState } from "react";
import axios from "axios";
import Nav from "./components/Nav/Nav";



function App() {
const [characters, setCharacters] = useState([]);

function onClose(id){
  const filtrados = characters.filter(character => character.id !== parseInt(id))
  setCharacters(filtrados)
}

function onSearch(id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
     if (!characters.some(character => character.id == parseInt(id))) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert(`¡El ID ${id} ya fue solicitado, recuerda que no puedes agregar repetidos!`);
     }
  }).catch((error) => {
    console.error(error);
    window.alert(`¡El ID ${id} no está disponible!`);
  });;
  
}


  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <CardsGrid onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;

import "./App.css";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import { Characters } from "./data";
import logo from './assets/img/logo.png'

function App() {
  return (
    <div className="App">
      <img id="logo" src={logo}/>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}

      <CardsGrid characters={Characters} />
    </div>
  );
}

export default App;

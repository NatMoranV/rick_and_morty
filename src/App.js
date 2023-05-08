import "./App.css";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import { Characters } from "./data";

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}

      <CardsGrid characters={Characters} />
    </div>
  );
}

export default App;

import "./App.css";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import { Characters } from "./data";
import videoBg from "./assets/video/videoBg.mp4";

function App() {
  return (
    <div className="App">
      <video src={videoBg} autoPlay muted loop />
      <h1>Rick and Morty</h1>
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}

      <CardsGrid characters={Characters} />
    </div>
  );
}

export default App;

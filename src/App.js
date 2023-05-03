import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import {Characters } from './data';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />

         <Cards 
            characters = {Characters}
         />
      </div>
   );
}

export default App;

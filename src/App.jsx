import { useState } from 'react'
import PokemonCard from "./components/PokemonCard.jsx"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pokemonList from './components/PokemonCard.jsx'



function App() {
  const [count, setCount] = useState(0)
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return (
  
  <>
      <div>
        <PokemonCard pokemonList={pokemonList}/>
      </div>
  </>
  );
}

export default App;



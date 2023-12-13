import PokemonCard from './components/PokemonCard.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length -1){
    setPokemonIndex(pokemonIndex + 1)
  }};

  const handlePrevClick = () => {
    if (pokemonIndex > 0){
    setPokemonIndex(pokemonIndex - 1)
  }};

  
  
  return (
  
  <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <button onClick={handlePrevClick}>Précédent</button>
        <button onClick={handleNextClick}>Suivant</button>
        
      </div>
  </>
  );
  }

export default App;



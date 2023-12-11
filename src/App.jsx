import { useState } from 'react'
import PokemonCard from "./components/PokemonCard.jsx"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
  <>

    <div>
      <figure>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
        <figcaption>Bulbasaur</figcaption>
      </figure>
    </div>
  </>
  );
}

export default App;


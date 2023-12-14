function NavBar({ pokemonIndex, setPokemonIndex, pokemonSelect,pokemonList }) {
   


return (

    <>
        {pokemonList.map((pokemon, index) => (
            <button key={index} onClick={() => pokemonSelect(index)}> {pokemon.name}</button>
        ))}
    </>)
}

export default NavBar;
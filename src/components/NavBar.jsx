function NavBar({ pokemonIndex, setPokemonIndex, pokemonSelect,pokemonList }) {
   
    const handlePokemonSelection = (index) => {
        
        pokemonSelect(index);
        if (pokemonList[index].name.toLowerCase() === 'pikachu') {
            alert('pika pikachu !!!');
        }
    };

return (

    <>
        {pokemonList.map((pokemon, index) => (
            <button key={index} onClick={() => handlePokemonSelection(index)}> {pokemon.name}</button>
        ))}
    </>)
}

export default NavBar;
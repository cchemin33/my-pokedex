
function PokemonCard(props) {
    console.log(props);

    const pokemon = props.pokemonList[0];

    return (
        <figure>
        {pokemon.imgSrc != null ? (<img src={pokemon.imgSrc} alt={pokemon.name}/>) : (<p>???</p>)
    }
    <figcaption>{pokemon.name}</figcaption>
    </figure >
    
    );
}

export default PokemonCard;




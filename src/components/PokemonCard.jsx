import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name : PropTypes.string.isRequired,
        imgSrc : PropTypes.string.isRequired,
    }).isRequired,
}

function App() {
    const pokemon = {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    };

    return <PokemonCard pokemon={pokemon} />;
}
export default PokemonCard;




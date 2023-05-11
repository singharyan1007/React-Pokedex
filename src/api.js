const BASE_URL = 'https://pokeapi.co/api/v2/';

const cache = {};

// Make a GET request to 'PokeAPI'.
const get = async ( endpoint ) => {
	if ( ! cache[ endpoint ] ) {
		const data = await fetch( BASE_URL + endpoint ).then( ( res ) => res.json() );

		cache[ endpoint ] = data;
	}

	return cache[ endpoint ];
};

// Fetch all pokemons.
export const fetchPokemons = ( limit, offset ) => {
	return get( `pokemon?limit=${ limit }&offset=${ offset }` );
};

// Fetch specific pokemon data.
export const fetchPokemonData = ( pokemonId ) => {
	return get( `pokemon/${ pokemonId }` );
};


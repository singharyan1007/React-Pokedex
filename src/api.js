import axios from "axios";
const BASE_URL='https://pokeapi.co/api/v2/';

const cache={};

//Making a get request to the api
//Declaring a constant get which is an asynchronous function and takes `endpoint` as a parameter
const get=async (endpoint)=>{
     if(!cache[endpoint]){
        const response=await axios.get(BASE_URL + endpoint);
        //The if statement checks whether the endpoint key is present in the cache object
        cache[endpoint]=response.data;
        //The data received from the HTTP GET request is assigned to the endpoint key of the cache object

     }
     return cache[endpoint]

}

export const fetchPokemons = ( limit, offset ) => {
	return get( `pokemon?limit=${ limit }&offset=${ offset }` );
};

// Fetch specific pokemon data.
export const fetchPokemonData = ( pokemonId ) => {
	return get( `pokemon/${ pokemonId }` );
};

// Fetch pokemon evolutions.
export const fetchPokemonEvolutionChain = ( pokemonId ) => {
	return get( `pokemon-species/${ pokemonId }` ).then( ( data ) => {
		const evolutionChainId = data.evolution_chain.url.match( /\/(\d+)\// )[ 1 ];

		return get( `evolution-chain/${ evolutionChainId }` );
	} );
};
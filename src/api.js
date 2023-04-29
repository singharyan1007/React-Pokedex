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

export const fetchPokemons=(limit,offset)=>{
    return get(`pokemon?limit=${limit}&offset=${offset}`);
};

export const fetchPokemonData=(pokemonId)=>{
    return get(`pokemon${pokemonId}`);
};

export const fetchPokemonEvolutionChain = async (pokemonId) => {
    const data = await get(`pokemon-species/${pokemonId}`);
    const evolutionChainId = data.evolution_chain.url.match(/\/(\d+)\//)[1];
    return await get(`evolution-chain/${evolutionChainId}`);
  };
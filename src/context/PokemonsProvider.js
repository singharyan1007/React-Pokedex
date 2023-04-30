import { useContext,useState,createContext } from "react";
export const PokemonsContext=createContext();

function PokemonsProvider({children}){
    const [pokemons,setPokemons]=useState([]);
    const [currentPokemonId,setCurrentPokemonId]=useState(-1);
    const currentPokemon=pokemons[currentPokemonId];

    return(
        <PokemonsContext.Provider value={{pokemons
        ,setPokemons,currentPokemon,currentPokemonId,setCurrentPokemonId,currentPokemon}}>
            {children}
        </PokemonsContext.Provider>
    )
}

export const usePokemons=()=>{
    return useContext(PokemonsProvider);
}
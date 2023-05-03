import { useEffect,useState } from "react";
import {useNormaliseEvolutionChain} from './useNormaliseEvolutionChain'
import { fetchPokemonEvolutionChain } from "../api";

//Hook to get an Evolution chain using the Pokemon Id
const useEvolutionChain=(pokemonId)=>{
    const [currentEvolution,setCurrentEvolution]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const {evolutionChain}=useNormaliseEvolutionChain(currentEvolution);

    useEffect(()=>{
        if(pokemonId){
            setIsLoading(true)
            fetchPokemonEvolutionChain(pokemonId).then((evolution)=>{
                setCurrentEvolution(evolution);
                setIsLoading(false);
            })
        }
    },[pokemonId])

    return {
        currentEvolution,evolutionChain,isLoading
    }
}
export default useEvolutionChain
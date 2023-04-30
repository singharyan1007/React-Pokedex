import { useCallback,useEffect, useMemo,useState } from "react";
import {fetchPokemon,fetchPokemonData} from '../api';
import generations from '../data/generation'

//Hook to get Pokemon geneartion data using ID
function useGeneration(generationID){
    const [pokemons,setPokemons]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    const generation=useMemo(()=>{
        return generations.find((gen)=>gen.id===generationID)
    },[generationID]);
    //memoizes the generationID and returns the first element it finds in the generation array, when gen.id===generationID
    //The second argument is the array dependency, means the function will only be recalculated when the generationID changes

    const fetchData=useCallback(()=>{
        //fetches pokemons data by generation
        if(generations.limit===null || generation.offset===null){
            return;
        }
        //test case for ID which is not present in the data
        setIsLoading(true);
        setPokemons([]);

        



    })
}
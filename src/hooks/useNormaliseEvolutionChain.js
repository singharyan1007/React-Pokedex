import {useMemo} from 'react'
import {normaliseEvolutionChain} from '../utlis'

//Hook to normalise an Evolution chain into an array
const useNormaliseEvolutionChain=({chain,id})=>{
    return useMemo(()=>{
        return {evolutionChain:chain?normaliseEvolutionChain(chain):[]}
    },[id])
}

export default useNormaliseEvolutionChain;
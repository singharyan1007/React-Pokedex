import Loader from "../../Loader/Loader";
import {useEvolutionChain} from '../../../hooks/useEvolutionChain'
import EvolutionItem from '../../EvolutionItem/EvolutionItem'

function Evolution({pokemon,onPokemonChange}){
    const {isLoading,evolutionChain}=useEvolutionChain(pokemon.id);
    return (
        <div>
            <h3>Evolution Chain</h3>
            {isLoading && 
            <Loader/>
            }
            {!isLoading && !evolutionChain.length && 
            <div>
                This Pokemon doesn't evolve
                </div>
            }
            { ! isLoading &&
				evolutionChain.map( ( evolution ) => (
					<EvolutionItem
						key={ `${ evolution.currentId }-${ evolution.nextId }` }
						onPokemonChange={ onPokemonChange }
						{ ...evolution }
					/>
				) )
			}

        </div>
    )
}

export default Evolution
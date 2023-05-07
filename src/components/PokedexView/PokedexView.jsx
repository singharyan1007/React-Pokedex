import React,{useEffect} from 'react'
import Card from '../Card/card'
import Loader from '../Loader/Loader'
import {usePokemons} from '../../context/PokemonsProvider'
import useGeneration from '../../hooks/useGeneration'
function PokedexView({generation}) {
  const { pokemons, setPokemons, setCurrentPokemonId } = usePokemons();
	const { data, isLoading } = useGeneration( generation );

	useEffect( () => {
		setPokemons( data );
	}, [ data ] );

	if ( isLoading ) {
		return <Loader />;
	}
return (
    <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
   {
				pokemons.map( ( pokemon ) => {
					return (
						<Card pokemon={ pokemon } key={ pokemon.id } onClick={ () => setCurrentPokemonId( pokemon.id ) } />
					);
				} )
			}
  </div>
  )
}

export default PokedexView
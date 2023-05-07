import {usePokemons}  from '../../context/PokemonsProvider'
import {useNavigate} from 'react-router-dom'
import {getGenerationByPokemonId} from '../../utils'
import './EvolutionItem.css'
export default function EvolutionItem({currentId,currentName,currentImage,nextId,nextName,nextImage,trigger,triggerValue,onPokemonChange}){
    const {setCurrentPokemonId}=usePokemons();
    const navigate=useNavigate();

    const handleClick=(pokemonId)=>{
        const {link}=getGenerationByPokemonId(pokemonId);

        // Navigate to the Pokemon's generation ID.
  if (navigate.pathname !== link) {
    navigate(link);
  }

  setCurrentPokemonId(pokemonId);
  onPokemonChange();
    };

    return(
        <div className='flex items-center justify-between relative evolution-container'>
            <div className='flex flex-column items-center justify-center ms-auto me-auto capitalize text-bold cursor-pointer evolve-container'>
                <div onClick={()=>handleClick(currentId)} className='relative text-center w-full flex items-center justify-center mb-[15px]'>
                    <div className="bg-pokeball"></div>
                    <img alt={currentName} src={currentImage} className='mw-[80%] mh-[10vh] h-auto relative z-[2]'/>
                </div>
                <span>{currentName}</span>
            </div>

            <div className='relative flex flex-column items-center '> 
                <div></div>
                {trigger}{triggerValue}
            </div>

            <div>
                <div>
                    <div className='bg-pokeball'></div>
                    <img alt={nextItem} src={nextImage}/>
                </div>
                <span>{nextName}</span>
            </div>
        </div>
    )

    
}
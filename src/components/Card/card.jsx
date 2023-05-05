import React,{memo} from 'react'
import { getImageURL } from '../../utils';
import './card.css'
function card({pokemon,onClick}) {
  if(!pokemon){
    return null;
  }
  const {name,id,types}=pokemon;
  const imgURL=getImageURL(id);
        className=types.map(({type})=>'type-' + type.name).join(' ');
        paddedId='#'+ id.toString().padStart(3,'000');
  return (
    <div className='p-4 h-full cursor-pointer' onClick={onClick}>
      <div className='{`card ${className}`} text-[#fff] overflow-hidden h-full relative flex items-center justify-between rounded-[3rem]'>
        
          <span className='absolute top-[20px] right-[40px] text-4xl text-[rgba(255,255,255,0.2)]pokemon-id'>
            {paddedId}
          </span>
          <div className='flex-start'>
            <h2 className='capitalize m-0 text-3xl'>{name.replace(/-/g,' ')}</h2>
            <div className='mt-4'>
              {
              types.map(({type})=>(
                <span className='rounded-[100rem] table bg-[rgba(225,225,225,0.2)] py-1 px-3 capitalize' key={type.name} >{}</span >
              ))
              }
            </div>
          </div>
          <div className='self-end flex items-center justify-end mw-[50%]'>
            <img src={imgURL} alt={name} className='mw-full mh-full drop-shadow' />
          </div>
       
      </div>
    </div>
  )
}

export default card
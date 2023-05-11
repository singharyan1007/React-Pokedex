import React from 'react'
import './Navigation.css'
import generations from '../../data/generation'
import { NavLink } from 'react-router-dom'
function CustomNavLink(props){
  return <NavLink className=' navigation-link  ' activeClassName='active' {...props}/>
}


function Navigation() {
  return (
    <div className="navigation-container">
		<p className='mb-4 mt-4 outline-none drop-shadow-md tracking-wide font-semibold text-[#6C79DB]'>A simple Pokedex application built with React and Pokemon Api</p>
			<h3 className="navigation-title">Select Generation:</h3>

			<div className="links-container">
				{
					generations.map( ( { id, link, text } ) => (
						<CustomNavLink exact key={ id } to={ link }>
							{ text }
						</CustomNavLink>
					) )
				}
			</div>
		</div>
  )
}

export default Navigation

import React from 'react'
import { NavLink } from 'react-router-dom'
import generations from '../../data/generation'
import './Navigation.css'
function CustomNavLink(props){
  return <NavLink className=' navigation-link  ' activeClassName='active' {...props}/>
}


function Navigation() {
  return (
    <div className="text-center mb-16">
      <h3 className="align-middle font-bold mt-16 mb-4 mx-4 text-[#6C79DB] drop-shadow-md text-3xl" >Select Generation:</h3>
      <div className="table m-auto bg-[#FFF] shadow-lg">
      {
        generations.map(({id,link,text})=>(
          <CustomNavLink exact key={id} to={link}>{text}</CustomNavLink>
        ))


      }
      </div>
    </div>
  )
}

export default Navigation
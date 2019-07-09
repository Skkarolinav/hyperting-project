import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation =() =>{
    return(
      <div>
        <nav className="navbar navbar-light bg-light">
        <NavLink type="button" className="btn btn-primary my-btn" to={'/currencies'}>Get Currencies</NavLink>        
        <NavLink type="button" className="btn btn-primary my-btn" to={'/'}>Home</NavLink>
        <NavLink type="button" className="btn btn-primary my-btn" to={'/pairs'} >Get Pairs</NavLink>
        </nav>
      </div>
    )
}
  
export default Navigation;
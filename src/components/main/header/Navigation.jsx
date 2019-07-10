import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation =() =>{
  return(
    <div>
      <nav className='d-flex justify-content-center navigation-panel'>
        <NavLink type='button' className='btn btn-primary navigation-btn' to={'/currencies'}>Get Currencies</NavLink>        
        <NavLink type='button' className='btn btn-primary navigation-btn' to={'/'}>Home</NavLink>
        <NavLink type='button' className='btn btn-primary navigation-btn' to={'/pairs'}>Get Pairs</NavLink>
      </nav>
    </div>
  )
}
  
export default Navigation;
import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation =(props) =>{
    return(
      <div>
        {/* <button onClick={props.handleFechCurrencies}>Download Curr</button>
        <button onClick={props.handleFechPairs}>Download Pairs</button> */}
        <NavLink to={'/currencies'} >Get Currencies</NavLink>
        <NavLink to={'/pairs'} >Get Pairs</NavLink>
      </div>
    )
}
  
export default Navigation;
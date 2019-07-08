import React from 'react';
import {Route, Switch} from 'react-router-dom'

import HomePage from '../main/content/homePage/HomePage'
import ErrorPage from '../main/content/errorPage/ErrorPage'

import GetCurrenciesPage from '../main/content/getCurrenciesPage/GetCurrenciesPage'
import GetPairsPage from '../main/content/getPairsPage/GetPairsPage'

const Routing = (props) => {
    console.log(props.currencies)
    return ( 
         <Switch>
             <Route path='/' exact component={HomePage}/>
                 <Route 
                    path='/currencies' component={GetCurrenciesPage}  />
                 <Route path='/pairs' component={GetPairsPage} /> 
             <Route  component={ErrorPage}/> 
          </Switch> 
        // <>
        //  <GetCurrenciesPage downArr={props.currencies} columnDefs={props.columnDefs}/>
        //  <GetPairsPage downArr={props.pairs} columnDefs={props.columnDefsPairs}/> 
        // </>
    );
}
 
export default Routing;
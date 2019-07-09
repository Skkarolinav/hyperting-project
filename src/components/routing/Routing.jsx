import React from 'react';
import {Route, Switch} from 'react-router-dom'

import HomePage from '../main/content/homePage/HomePage'
import GetCurrenciesPage from '../main/content/getCurrenciesPage/GetCurrenciesPage'
import GetPairsPage from '../main/content/getPairsPage/GetPairsPage'
import ErrorPage from '../main/content/errorPage/ErrorPage'

const Routing = () => {
    return ( 
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/currencies' component={GetCurrenciesPage}/>
            <Route path='/pairs' component={GetPairsPage}/> 
            <Route  component={ErrorPage}/> 
        </Switch> 
    );
}
 
export default Routing;
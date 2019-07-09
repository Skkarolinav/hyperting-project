import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Routing from './components/routing/Routing'
import Navigation from '../src/components/main/header/Navigation'

const App = () => {
  return ( 
    <Router>
      <div className='app'>
        <header>
          <Navigation />
        </header>
        <main>
          <Routing />
        </main>
      </div>
    </Router>
  );
}

export default App;
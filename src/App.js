import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Title from './components/main/header/Title';
import Navigation from '../src/components/main/header/Navigation';
import Routing from './components/routing/Routing';
import Footer from './components/main/footer/Footer';

const App = () => {
  return ( 
    <Router>
      <div className='app'>
        <header>
          <Title />
          <Navigation />
        </header>
        <main>
          <Routing />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
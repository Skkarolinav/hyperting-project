import React from 'react';

const HomePage = () => {
  return ( 
    <div className='home-panel-master row d-flex justify-content-center'>
      <div className='text-center home-panel'>
          This simple application enables a real-time displaying of the two sets of the data of cryptocurrencies.
      </div>
      <div className='text-center home-panel'>
          Get Currencies provides the currencies of cryptocurrencies as well as non-crypto currencies.
          Get Pairs provides the pairs of the listed currencies.
      </div>
      <div className='text-center home-panel'>
          The aim of this project was to fetch the data from the public API (https://nexchange2.docs.apiary.io) and present two spreadsheets of data in a table.
      </div>
    </div>
  );
}

export default HomePage;
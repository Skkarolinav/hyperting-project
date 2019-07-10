import React from 'react';

const ErrorPage = () => {
  return ( 
    <div className='error-panel'>
      <div className='d-flex justify-content-center'>
        <h2>The URL address does not exist.</h2>
      </div>
      <div className='d-flex justify-content-center'>
        <h4>Please check if the URL address is correct.</h4>
      </div>
    </div>
  );
}

export default ErrorPage;
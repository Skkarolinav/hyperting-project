import React from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';


const GetCurrenciesPage = (props) => {

    console.log(props.downArr + ' downArr GetCurrenciesPage')
    console.log(props.columnDefs + ' columnDefs GetCurrenciesPage')
    return ( 
      <div className='ag-theme-balham-dark'
        style={{
          height:'100vh',
          widht:'100vw'
        }}>
        <AgGridReact 
          columnDefs={props.columnDefs}
          rowData={props.downArr}>
          </AgGridReact>
      </div>

     );
  }

  export default GetCurrenciesPage;

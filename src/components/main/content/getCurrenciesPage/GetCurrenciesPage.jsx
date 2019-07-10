import React,{Component} from 'react';
import {AgGridReact} from 'ag-grid-react';

import {getCurrenciesData} from '../../../repository/DataRepository';
import {columnDefs} from './Columns';

class GetCurrenciesPage extends Component {
  state = { 
    time: new Date().toLocaleString(),
    currencies:[],
  }

  async componentDidMount(){
    const data = await getCurrenciesData();

    this.setState({
      currencies: data,
    })
  }
  
  handleReFresh = async() =>{
    const data = await getCurrenciesData();
    const refreshTime = new Date().toLocaleString();

    this.setState({
      currencies:data,
      time: refreshTime
    })
  }

  render() { 
    return (
      <>
        <div className='d-flex justify-content-around align-items-center border border-success'>
          <p className='currencies-description'>Currencies Data Spreadsheet</p>
          <button type='button' className='btn btn-success currencies-btn' onClick={this.handleReFresh}>Refresh</button>
          <p className='currencies-description'>{this.state.time}</p>
        </div>
        <div className='ag-theme-balham' style={{height:'75vh', widht:'100vw'}}>
          <AgGridReact 
            columnDefs={columnDefs}
            rowData={this.state.currencies}>
          </AgGridReact>
        </div>
      </>
    );
  }
}
 
export default GetCurrenciesPage;
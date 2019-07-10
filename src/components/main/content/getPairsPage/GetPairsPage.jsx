import React,{Component} from 'react';
import {AgGridReact} from 'ag-grid-react';

import {getPairsData} from '../../../repository/DataRepository';
import {columnDefs} from './Columns';

class GetCurrenciesPage extends Component {
  state = { 
    time: new Date().toLocaleString(),
    pairs:[],
  }

  async componentDidMount(){
    const data = await getPairsData();

    this.setState({
      currencies: data,
    })
  }

  handleRefresh = async() =>{
    const data = await getPairsData();
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
          <p className='pairs-description'>Pairs Data Spreadsheet</p>
          <button type='button' className='btn btn-success pairs-btn' onClick={this.handleRefresh}>Refresh</button>
          <p className='pairs-description'>{this.state.time}</p>
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
import React,{Component} from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';


const GetPairsAPI = 'https://api.nexchange.io/en/api/v1/pair/';

class GetCurrenciesPage extends Component {
  state = { 
    pairs:[],
    reFresh:[],

    columnDefsPairs:[
      {
        headerName: "Name", 
        field: "name",
        filter: true 
      }, 
      {
        headerName: "Base", 
        field: "base",
        filter: true 
      }, 
      {
        headerName: "Quote", 
        field: "quote",
        sortable: true 
      },
      {
        headerName: "Fee_ask", 
        field: "fee_ask",
        sortable: true 
      },
      {
        headerName: "Fee_bid", 
        field: "fee_bid",
        sortable: true 
      },
      {
        headerName: "Disabled", 
        field: "disabled",
        filter: true 
      },
      {
        headerName: "Test_mode", 
        field: "test_mode",
        filter: true 
      },
      {
        headerName: "Orderbook_enabled", 
        field: "orderbook_enabled",
        filter: true 
      },
      {
        headerName: "Reverse_orderbook_enabled", 
        field: "reverse_orderbook_enabled",
        filter: true 
      },
    ]
  }

    componentDidMount(){
    fetch(GetPairsAPI)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error(response.statusText)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        pairs: data,
        reFresh:data
      })
    })
    .catch(error => console.log(error, 'There was an error accessing the data.'))
    console.log('1. componentDidMount')
  }

  componentDidUpdate(){
    console.log('2. Update przed setInterval')
    setInterval(this.fechData,30000)
    setInterval(()=>{console.log('Update pracuje')},30000)
    console.log('3. componentDidUpdate')
  }

fetchData = () =>{
  fetch(GetPairsAPI)
  .then(response => response.json())
  .then(data => this.setState({ reFresh:data }));
  console.log('2. feczowanie danych')
}

handleReFresh = () =>{
  console.log(this.state.reFresh)
  if(this.state.pairs !==this.state.reFresh){
    console.log('Klik: dane podmienione ')
    this.setState({
      pairs:this.state.reFresh
    })
  }else{
    console.log('Klik: dane nie podmienione ')
  }
}

  render() { 
    return (
      <>

      <div>
      <button onClick={this.handleReFresh}>Refresh pairs</button>
      </div>

          <div className='ag-theme-balham-dark'
      style={{
        height:'100vh',
        widht:'100vw'
      }}>
      <AgGridReact 
        columnDefs={this.state.columnDefsPairs}
        rowData={this.state.pairs}>
        </AgGridReact>
    </div>
    </>
      );
  }
}
 
export default GetCurrenciesPage;
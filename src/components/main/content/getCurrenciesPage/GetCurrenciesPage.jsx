import React,{Component} from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';


const GetCurrenciesAPI ='https://api.nexchange.io/en/api/v1/currency/';

class GetCurrenciesPage extends Component {
  state = { 
    currencies:[],
    reFresh:[],

    columnDefs: [
      {
        headerName: "Code", 
        field: "code",
        filter: true ,
        width: 90,
      }, 
      {
        headerName: "Name", 
        field: "name",
        filter: true ,
        width: 100,
      }, 
      {
        headerName: "Min_Confirmations", 
        field: "min_confirmations",
        filter: true ,
        sortable: true 
      },
      {
        headerName: "Is_Crypto", 
        field: "is_crypto",
        filter: true ,
        sortable: true 
      },
      {
        headerName: "Minimal_Amount", 
        field: "minimal_amount",
        filter: true ,
        sortable: true 
      },
      {
        headerName: "Is_Base_Of_Enabled_Pair", 
        field: "is_base_of_enabled_pair",
        filter: true 
      },
      {
        headerName: "Is_Quote_Of_Enabled_Pair", 
        field: "is_quote_of_enabled_pair",
        filter: true 
      },
      {
        headerName: "Has_Enabled_Pairs", 
        field: "has_enabled_pairs",
        filter: true 
      },
      {
        headerName: "Is_Crypto", 
        field: "is_crypto",
        filter: true 
      },
      {
        headerName: "Withdrawal_Fee", 
        field: "withdrawal_fee",
        sortable: true,
        filter: true
      }
    ],

  }


    componentDidMount(){
      console.log('1. componentDidMount')
    fetch(GetCurrenciesAPI)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error(response.statusText)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        currencies: data,
        reFresh:data
      })
    })
    .catch(error => console.log(error, `There was an error accessing the data.`))
  }
  

componentDidUpdate(){
  console.log('2. Update przed setInterval')
  setInterval(this.fechData,30000)
  setInterval(()=>{console.log('Update pracuje')},30000)
  console.log('3. componentDidUpdate')
}

fetchData = () =>{
fetch(GetCurrenciesAPI)
.then(response => response.json())
.then(data => this.setState({ reFresh:data }));
console.log('2. feczowanie danych')
}


handleReFresh = () =>{
console.log(this.state.reFresh)
if(this.state.currencies !==this.state.reFresh){
  console.log('Klik: dane podmienione ')
  this.setState({
    currencies:this.state.reFresh
  })
}else{
  console.log('Klik: dane nie podmienione ')
}
}

  render() { 

    return (
      <>
      <div>
        <button onClick={this.handleReFresh}>Refresh</button>
      </div>
          <div className='ag-theme-balham-dark'
      style={{
        height:'80vh',
        widht:'100vw'
      }}>
      <AgGridReact 
        columnDefs={this.state.columnDefs}
        rowData={this.state.currencies}>
        </AgGridReact>
    </div>
    </>
      );
  }
}
 
export default GetCurrenciesPage;
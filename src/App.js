import React,{Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Routing from './components/routing/Routing'
import Navigation from '../src/components/main/header/Navigation'
import './App.css'

const GetCurrenciesAPI ='https://api.nexchange.io/en/api/v1/currency/';
const GetPairsAPI = 'https://api.nexchange.io/en/api/v1/pair/';

class App extends Component {
  state = { 
    currencies:[],
    pairs:[],

    columnDefs: [
      {
        headerName: "Code", 
        field: "code"
      }, 
      {
        headerName: "Name", 
        field: "name"
      }, 
      {
        headerName: "Min_Confirmations", 
        field: "min_confirmations",
        sortable: true 
      },
      {
        headerName: "Is_Crypto", 
        field: "is_crypto",
        sortable: true 
      },
      {
        headerName: "Minimal_Amount", 
        field: "minimal_amount",
        sortable: true 
      },
      {
        headerName: "Is_Base_Of_Enabled_Pair", 
        field: "is_base_of_enabled_pair"
      },
      {
        headerName: "Is_Quote_Of_Enabled_Pair", 
        field: "is_quote_of_enabled_pair"
      },
      {
        headerName: "Has_Enabled_Pairs", 
        field: "has_enabled_pairs"
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
    columnDefsPairs:[
    {
      headerName: "name", 
      field: "name"
    }, 
    {
      headerName: "base", 
      field: "base"
    }, 
    {
      headerName: "quote", 
      field: "quote",
      sortable: true 
    },
    {
      headerName: "fee_ask", 
      field: "fee_ask",
      sortable: true 
    },
    {
      headerName: "fee_bid", 
      field: "fee_bid",
      sortable: true 
    },
    {
      headerName: "disabled", 
      field: "disabled"
    },
    {
      headerName: "test_mode", 
      field: "test_mode"
    },
    {
      headerName: "orderbook_enabled", 
      field: "orderbook_enabled"
    },
    {
      headerName: "reverse_orderbook_enabled", 
      field: "reverse_orderbook_enabled",
      filter: true 
    },
   ]

   }

  handleFechCurrencies = () =>{
    fetch(GetCurrenciesAPI)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error('There was an error accessing the data.')
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        urrencies: data
      })
    })
    .catch(error => console.log(error))
  }

  handleFechPairs = () =>{
    fetch(GetPairsAPI)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error('There was an error accessing the data.')
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        pairs: data
      })
    })
    .catch(error => console.log(error))
  }

  render() {      
    return ( 
      <Router>
        <div className='app'>
          <header>
            <Navigation handleFechCurrencies={this.handleFechCurrencies} handleFechPairs={this.handleFechPairs}/>
          </header>
          <main>
            <Routing currencies={this.state.currencies} columnDefs={this.state.columnDefs} pairs={this.state.pairs} columnDefsPairs={this.state.columnDefsPairs}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
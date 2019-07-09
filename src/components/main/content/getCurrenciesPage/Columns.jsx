export const columnDefs = [
  {
    headerName: 'Code', 
    field: 'code',
    filter: true ,
    width: 90,
  }, 
  {
    headerName: 'Name', 
    field: 'name',
    filter: true ,
    width: 100,
  }, 
  {
    headerName: 'Min_Confirmations', 
    field: 'min_confirmations',
    filter: true ,
    sortable: true 
  },
  {
    headerName: 'Is_Crypto', 
    field: 'is_crypto',
    filter: true ,
    sortable: true 
  },
  {
    headerName: 'Minimal_Amount', 
    field: 'minimal_amount',
    filter: true ,
    sortable: true 
  },
  {
    headerName: 'Is_Base_Of_Enabled_Pair', 
    field: 'is_base_of_enabled_pair',
    filter: true 
  },
  {
    headerName: 'Is_Quote_Of_Enabled_Pair', 
    field: 'is_quote_of_enabled_pair',
    filter: true 
  },
  {
    headerName: 'Has_Enabled_Pairs', 
    field: 'has_enabled_pairs',
    filter: true 
  },
  {
    headerName: 'Is_Crypto', 
    field: 'is_crypto',
    filter: true ,
    
  },
  {
    headerName: 'Withdrawal_Fee', 
    field: 'withdrawal_fee',
    sortable: true,
    filter: true,
    width: 100,
  }
]
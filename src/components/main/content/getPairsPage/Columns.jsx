export const columnDefs = [
    {
        headerName: 'Name', 
        field: 'name',
        filter: true,
        width: 90,
    }, 
    {
        headerName: 'Base', 
        field: 'base',
        filter: true 
    }, 
    {
        headerName: 'Quote', 
        field: 'quote',
        sortable: true 
    },
    {
        headerName: 'Fee_ask', 
        field: 'fee_ask',
        sortable: true 
    },
    {
        headerName: 'Fee_bid', 
        field: 'fee_bid',
        sortable: true 
    },
    {
        headerName: 'Disabled', 
        field: 'disabled',
        filter: true 
    },
    {
        headerName: 'Test_mode', 
        field: 'test_mode',
        filter: true 
    },
    {
        headerName: 'Orderbook_enabled', 
        field: 'orderbook_enabled',
        filter: true 
    },
    {
        headerName: 'Reverse_orderbook_enabled', 
        field: 'reverse_orderbook_enabled',
        filter: true,
        width: 100, 
    },
]
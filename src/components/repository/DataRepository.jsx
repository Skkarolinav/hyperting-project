const GetCurrenciesURL = 'https://api.nexchange.io/en/api/v1/currency/';
const GetPairsURL = 'https://api.nexchange.io/en/api/v1/pair/';

const getData = async(url) => {
    try {
        let response = await fetch(url);
        if (response.ok) {
          return await response.json();
        }
        throw new Error(response.status)  
      } catch(error) {
          alert(`There was an error accessing the data: ${error}.` )
        }
}

export const getCurrenciesData = async() =>{
    return await getData(GetCurrenciesURL);
  }

export const getPairsData = async() =>{
    return await getData(GetPairsURL);
}
  
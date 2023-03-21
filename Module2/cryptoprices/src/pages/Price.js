import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Price() {
  const params = useParams();
  console.log(params);
  //returning object that we called params and returns any parameters available on the browser 
  const [coin, setCoin] = useState(null);
  //accessing the params object to get the symbol param 

  const apiKey = process.env.REACT_APP_API_KEY;
  const symbol = params.symbol;
  // we grabbed the symbol from the params object 
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}` ;
  //   console.log(url);


//   function to fetch the data from coin api 
  const getCoin = async () => {
    try {
      const response = await axios.get(url);
      // axios lets us not use fetch anymore, has interceptors and supports promises
      setCoin(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //call the getcoin func when the component renders for the first time 
  useEffect(() => {
    getCoin();
  }, []);

//function to return JSX if we have data in state
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_base}
        </h1>
        <h2>$ {coin.rate}</h2>
      </div>
    );
  };
  const loading = () => (<h1>Loading...</h1>)
  

  return coin && coin.rate ? loaded() : loading();
  //? is if and : is else 
}

export default Price;

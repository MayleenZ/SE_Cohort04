import { createContext, useState} from "react";
import { nikeData } from "./data/nikeData";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import ProductsList from './components/ProductsList';

//1. creating the context
export const ProductContext = createContext(null)

function App() {
  const [data, setData] = useState(nikeData);
  // expecting data to change that is why we use a useState, expecing user's to add more products , remove or update
  const [cart, setCart] = useState([]);
  // define it in an array to define different items
  // useState is the data that will constantly change over time

  //2. Wrap the components inside context provider and pass the values 
  return (
    <ProductContext.Provider value={{data, cart, setCart}}>
    <div className = "">
      <Header  />
      {/* passing all the cart data to the shopping cart in the header*/}
      <ProductsList />
      {/* //passing all the data to the product list  */}
      {/* setCart will update the array */}
      {/* we are passing properties which is the data we added  */}
      {/* from app to productlist to productListItem - this is called prop drilling, it gets annoying later  */}
      <Footer />
    </div>
    </ProductContext.Provider>
  );
}

export default App;

import ProductListItem from "./ProductListItem";


//Context
import {ProductContext} from '../App'
import { useContext } from "react";



function ProductsList() {
  
  //recieved addtocart function and passed it to each item down below within map method 
//Consuming the data from the context 
const productContextValue = useContext(ProductContext)

console.log(productContextValue.data);

  return productContextValue.data.map((product) => (
    <ProductListItem product={product} key={product.id} />
    // receiving product information 
    //we keep passsing things down 
  ));
}

export default ProductsList;

// We could use filter, reduce, map methods to build features for the app 

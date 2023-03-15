import { useContext } from "react";
import { ProductContext } from "../App";

function ProductListItem(props) {
  const { product } = props;
//still passing product value

//Consume the context 
  const productContextValue = useContext(ProductContext);
  const {cart, setCart} = productContextValue;
  //update function to use correct values from product context value 
  //destructured to seperate variables instead of doing productContextValue.cart and so on 
  // console.log(productContextValue);


  const handleAddToCart = () => {
    setCart([...cart, product]);
    // using the spread operator to spread whhat is in the cart at the moment and adding the product at the end of the array
    // spreading products and adding it to the cart in an array.
    //destructured the cart 
  }
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} width="200" alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* defining an arrow function and saying when there is an onclick event, call anonymous function that will addtocart the product, when there is just one thing to do an arrow function will be used */}
    </div>
  );
}

export default ProductListItem;

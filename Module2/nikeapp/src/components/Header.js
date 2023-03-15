import { useContext } from "react";
import { ProductContext } from "../App";

function Header () {

    const productContextValue = useContext(ProductContext)
    const {cart} = productContextValue;
    //Grabbing cart property from the productContextValue object 

    return (
        <header>
            <h1>Nike Store</h1>
            <p>Shopping Cart: {cart.length > 0 ? cart.length: null}</p>
            {/* Using terneary within the curly brackets*/}
            {/* <p>Shopping Cart: {shoppingCart.length}</p> */}
            {/* shopping cart will get re-rendered from using the useState (hooks) */}
        </header>
    )
}

export default Header;

//update header to read from the product context instead of props 
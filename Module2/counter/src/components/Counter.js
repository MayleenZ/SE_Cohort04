import { useState } from "react";


//State declared inside counter component
function Counter(){
    //* State variables
    //Can declare multiple state variables 
    const [counter, setCounter] = useState(1)


    //* Functions - onclick event handlers
    const handleCountOne = () => {
        setCounter(counter + 1)
    }

    const handleCountByTwo = () => {
        setCounter(counter + 2)
    }

    const handleMultiplyByThree = () => {
        setCounter(counter * 3)
    }

    const handleSetZero = () => {
        setCounter(counter * 0)
    }


    //* Returned on the webpage and calling the functions we declared above
    // event handler function and passed it through the onclick event.
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleCountOne}>Click by One</button>
            <button onClick = {handleCountByTwo}>by two</button>
            <button onClick = {handleMultiplyByThree}>multiply three</button>
            <button onClick = {handleSetZero}>set Zero</button>
        </div>
    )
}

export default Counter;
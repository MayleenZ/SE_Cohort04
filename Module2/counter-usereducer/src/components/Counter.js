import {useContext} from 'react';
import { MyContext } from '../App';

function Counter () {
    const ctx = useContext(MyContext)
    console.log(ctx);
    // This is my state 

    //? dispatch action -> {type: 'add', payload: null}
    return (
        <div>
            <h2>Counter: {ctx.state}</h2>

{/* These names are just for the dev to know what type of action it will do  */}
            <button onClick={()=>ctx.dispatch({type: 'add', payload: null})}>Add</button>
            {/* Triggering a dispatch and have it update the state, we are calling the dispatch and passing an acton object */}
            <button onClick={()=>ctx.dispatch({type: 'subtract', payload: null})}>Subtract</button>
            {/* When i click on button it will trigger an action and get new state ready as it is dispatch */}
            <button onClick={()=>ctx.dispatch({type: 'ADD_FIVE', payload: 5})}>Add 5</button>
            <button onClick={()=>ctx.dispatch({type: 'SUBTRACT_FIVE', payload: 5})}>Sub 5</button>
            
        </div>
    )
}

export default Counter
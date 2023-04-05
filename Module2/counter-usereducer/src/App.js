import './App.css';
import Homepage from './pages/HomePage';
import {createContext, useReducer} from 'react'

//Init our context
//Allowing us to pass through data in counter component
export const MyContext = createContext(null)
//My Context wraps the apps in app component
//help us pass data down to child component 

function App() {


  // Created our useReducer hook with init of 0 and our reducer func
  //useReducer knows init value of state which is the 0
  const initialState= 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  //the reducer func will be called everytime we dispatch an action, will have all the logic to update the state
  function reducer(state, action) {
    const {type, payload} = action
    // destructuring action 
    console.log(action);
    // We are sending the action object from the Counter.js from our onClick where we are dispatching an action on useCounter and useReducer 
    switch(type) {
      case 'add':
        return state + 1;
        // passing a new value adding the state + 1, bc our initial vaulue was 0
      case 'subtract':
        return state - 1;
      case 'ADD_FIVE':
        return state + payload
        // Grabs the current state and adds the payload (5) that we added from Counter.js
      case 'SUBTRACT_FIVE':
        return state - payload
      default:
        return state
    }
  }


  return (
    <MyContext.Provider value={{state, dispatch}}>
      {/* Creating object of key of state and value of state and key of dispatch and value of dispatch, here we omitted keys and just passed the value */}
    <div className ="App">
      <Homepage />
      {/* rendered as a child of provider component */}
    </div>
    </MyContext.Provider>
  );
}

export default App;

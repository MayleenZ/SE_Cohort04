import { createSlice } from "@reduxjs/toolkit";

//creates a slice for the counter 
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        //key: value is a function here
        increment: (state) => {
            state.value += 1 ;
        },
        decrement: (state) => {
            state.value -=1;
        },
        incrementByAmount: (state, action) => {
            //the payload is number 5 that we are sending 
            console.log(action);
            state.value += action.payload;
        }
    }

});

//Export the actions
//Counter slice will set up actions and reducer object all together 
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
///export the reducer


export default counterSlice.reducer;
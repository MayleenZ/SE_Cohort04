import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todosData: [{id: 1, text: "Learn Redux"}]
    },
    reducers: {
        addTodo: (state, action) => {
            return {
              ...state,
              todosData: [action.payload, ...state.todosData]
            }
            // We update todos data by having a new array and add the payload at the end. we spread the state by adding it all into the array specifying we want the todosData
            // THE ADDTODO object is replaced by TodosData 
        }
    }
});


export const {addTodo} = todosSlice.actions;

export default todosSlice.reducer;
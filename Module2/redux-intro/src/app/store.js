import { configureStore } from "@reduxjs/toolkit";
//Creates a redux store using the configure store function. 
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todosSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer
    }
})

//Provider makes it accessible for any components in application, no prop drilling
import { useSelector, useDispatch } from "react-redux";
// useSelector- reads the data
// useDispatch - dispatches the action
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../features/todos/todosSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todosData);
  // The state goes through the store and matches the todo slice and passes the state and access the todos data from inside of the slice
  console.log(todos);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>
      {/*  */}
      <label>
        <input
          type="text"
          placeholder="To-do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo({ id: uuidv4(), text: text }))}>
          Create
        </button>
      </label>
      {/*  */}
      <div>
        {todos.map((item) => {
          return (
            <div>
              <h3>{item.text}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;

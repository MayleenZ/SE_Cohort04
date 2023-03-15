
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([])
// Setting useState to use the state of the changing todo's
const addTodo = (e) => {
  const newTodo = {
    text: e.target.value,
    id: Date.now(),
    // every object we need an id 
    completed: false
  }
  // Each todo is going to be a property with text, id and completed. It will be addedd to setTodos and attached to the input value ; code below
  setTodos([...todos, newTodo])
  e.target.value = "";
}

const completeTodo = (id, e) => {
  //create new copy of todo array and spread them in a brand new array to the state 
  const todosCopy = [...todos];
  //find the todo that matches the id from the copy of the todos array , if id matches it will return the index and return the value to the array 
  const indexOfTodo = todosCopy.findIndex(i => i.id === id)
  todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
  //access the completed property an reassign the opposite value that it currently has 
  setTodos([...todosCopy])
}

const editTodoText = (id, e) => {
  // here we are using the event bc we did to look at the target and assign it to the text and the todo we have found using the index 
  const todosCopy = [...todos];
  const indexOfTodo = todosCopy.findIndex(i => i.id === id)
  // it will find the index of the object we want to edit
  todosCopy[indexOfTodo].text = e.target.value;
  // replace the text with the value the user put in 
  setTodos(  [...todosCopy]  )
  //keep the state in an array and map over that 
  e.target.value = "";
  //clear out input each time user wants to type in 
}

const deleteTodo = (id) => {
  const todosCopy = [...todos]
  const indexOfTodo = todosCopy.findIndex(i => i.id === id)
  // loop array and recieve id in the parameters 
  //match id to item in arary to id we are looking for 
  // This variable grabs the index of the todo we are targetting that matches the id
  todosCopy.splice(indexOfTodo, 1)
  // remove todo from finding the index and remove just one
  setTodos([...todosCopy])
}
  return (
    <div className="App">
    <h1>To Do App</h1>
    
    <TodoList todos={todos} addTodo={addTodo} completeTodo={completeTodo} editTodoText={editTodoText} deleteTodo={deleteTodo}/>
    {/* this is us adding the properties when we write after the TodoList */}
    {/* we passed these down so we can return them to the UI */}
    </div>
  );
}

export default App;

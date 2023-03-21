import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  // Setting useState to use the state of the changing todo's

  useEffect(() => {
    //tag code that needs to be executed after component renders
    //get items from local storage
    const savedTodos = localStorage.getItem("todos");
    //localStorage is global object in the browser siilar to docmument
    //gettodos from the local storage 
    console.log(savedTodos);
    // console.log(JSON.parse(savedTodos));
    if (savedTodos && savedTodos !== "undefined" && savedTodos !== null) {
      //if its true and not undefined and not null then we will run this code
      //set the saved todos to the state
      setTodos(JSON.parse(savedTodos));
    }
  }, []);
  //code will be executed when computer mounts
  //will run everytime component re-renders

  //CRUD operations in todo app (create read update delete )
  const addTodo = (e) => {
    if (e.target.value === "") return;
    const newTodo = {
      text: e.target.value,
      id: Date.now(),
      // every object we need an id
      completed: false,
    };
    //stored todos in localstorage
    localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]));
    //
    // Each todo is going to be a property with text, id and completed. It will be addedd to setTodos and attached to the input value ; code below
    setTodos([...todos, newTodo]);
    e.target.value = "";
  };

  const completeTodo = (id, e) => {
    //create new copy of todo array and spread them in a brand new array to the state
    const todosCopy = [...todos];
    //find the todo that matches the id from the copy of the todos array , if id matches it will return the index and return the value to the array
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    // loop over array to find index of the todo we are looking for
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    //access the completed property an reassign the opposite value that it currently has, use the index to update the compelte property for todo object and set to the opposite of what is set, if false it will be set to true, if true it will be set to false
    localStorage.setItem('todos', JSON.stringify([...todosCopy]))
    //do before the state which is before set targetting the after effects 
    //set the new data into the local storage 
    setTodos([...todosCopy]);
    //updating the state after doing side effect function which is the the useeffect hook 
  };

  const editTodoText = (id, e) => {
    // here we are using the event bc we did to look at the target and assign it to the text and the todo we have found using the index
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    // it will find the index of the object we want to edit
    todosCopy[indexOfTodo].text = e.target.value;
    // replace the text with the value the user put in

    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    //we are again adding this beore the set todos and we are spreading the todos copy in there and adding the changes to local storage 
    setTodos([...todosCopy]);
    //keep the state in an array and map over that
    e.target.value = "";
    //clear out input each time user wants to type in
  };

  const deleteTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    // loop array and recieve id in the parameters
    //match id to item in arary to id we are looking for
    // This variable grabs the index of the todo we are targetting that matches the id
    todosCopy.splice(indexOfTodo, 1);
    // remove todo from finding the index and remove just one
//
    localStorage.setItem('todos', JSON.stringify([...todosCopy]))
    setTodos([...todosCopy]);
  };
  return (
    <div className="App">
      <h1>To Do App</h1>

      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
      {/* this is us adding the properties when we write after the TodoList */}
      {/* we passed these down so we can return them to the UI */}
    </div>
  );
}

export default App;

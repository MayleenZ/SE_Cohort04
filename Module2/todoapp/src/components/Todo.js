import { useState } from "react";


function Todo(props) {
    const {todo, completeTodo, editTodoText, deleteTodo} = props
    // console.log(props);

    const [showInput, setShowInput] = useState(false);
    //initialize it to be false 
    // the state is encapsulated inside each component, in this case each todo has their own state 

    return (
        <li>
            <div>
            <h2 onClick={()=> setShowInput(!showInput)}>{todo.text}</h2>
            <input 
            onKeyDown={(e) => {
                if (e.key === "Enter"){
                    editTodoText(todo.id, e)
                    setShowInput(false)
                    // if user is clicking enter then it will pass the id and the object then the set show is set to false so that it hides the input
                }
            }}
            style={{display: showInput ? 'block' : 'none'}}
            // this will toggle to true or false and either hide or show , when false it doesnt show input, if true it shows input
            // using terneary -> ? if , : then
            type="text" 
            placeholder = "Update Todo" />
            </div>

            <label>
                Complete {' '}
                <input 
                onChange={(e) => completeTodo(todo.id, e)} type = "checkbox" checked = {todo.completed}/>
                {/* property of checked for completed tasks, the checked will be automatically checked if it is completed (true)  */}
                {/* if this event happens, it will be checked and will be changed to completed which is truthy value.  */}
            </label>
            <button onClick = {(e) => deleteTodo(todo.id)}>DELETE</button>
            {/* execute the function of delete, will find the index and splice the todo with the index and remove just 1  */}
        </li>
    )
}

export default Todo;

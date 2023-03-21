import Todo from "./Todo";

function TodoList(props) {
  const { todos, addTodo, completeTodo, editTodoText, deleteTodo } = props;
  //destructure from props object to just grab the todos array
  console.log(todos);
  //confirming that we did grab the todos

  return (
    <>
      <h1>Create To-do</h1>
      <input
        type="text"
        placeholder="Create a todo"
        onKeyDown={(e) => e.key === "Enter" && addTodo(e)}
      />
      {/* if user presses enter key we will add the input to the addTodo  */}
      {todos.length ? (
        <>
          <h1>To-do Items</h1>
          <ul className="todoList">
            {todos
              .filter((i) => !i.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    // we set the key so react can identify each item on the list
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo = {deleteTodo}
                  />
                );
              })}
          </ul>
          <h1>Completed Items</h1>
          <ul className="todoList">
            {todos
              .filter((i) => i.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo = {deleteTodo}
                  />
                );
              })}
          </ul>
        </>
      ) : (
        <h1>No To-do added</h1>
      )}
    </>
  );
}

export default TodoList;

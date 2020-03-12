import React from "react";

import TodoList from "./components/TodoList"; // import TodoList function
import NewTodo from "./components/NewTodo";

//type "React.FC = it is function that React can understand"
const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  const todoAddHandler = (text: string) => {
    console.log(text);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
    // <TodoList <--- allows access to this function in Todolist.tsx />
    // <TodoList items ={} <--- {} that allows me to use the ingredient inside todos.
    // items={todos} is called "props" which has particular react type. looked like "props = {items:todos}"
    // in typescript, it cannot ensure that props would match the todos inside items object so I can set generic type in TodoList.tsx to clear this out
  );
};

export default App;

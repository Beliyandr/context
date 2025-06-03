import React from "react";

import "./App.css";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { TodoInfo } from "./components/TodoInfo";
import { TodoProvider } from "./utils/TodoContext";

function App() {
  console.log("App rendered");

  return (
    <div className="App">
      <TodoProvider>
        <h1>Todos with Context API</h1>
        <hr />
        <div className="container">
          <NewTodo />
          <TodoList />
          <TodoInfo />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;

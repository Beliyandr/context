import React from "react";
import { TodoItem } from "./TodoItem";
import { useTodo } from "../hooks/useTodo";

export const TodoList = () => {
  console.log(`TodoList rendered`);

  const { todos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

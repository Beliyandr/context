import React from "react";
import { useTodo } from "../hooks/useTodo";

export const TodoInfo = () => {
  console.log("TodoInfo rendered");

  const { totalTodos } = useTodo();

  return <div className="total">Total Todos: {totalTodos}</div>;
};

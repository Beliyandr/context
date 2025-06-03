import React, { useContext } from "react";
import { TodoContext } from "../utils/TodoContext";

export const useTodo = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext)
    throw new Error("useTodo must be used within a TodoProvider");

  return todoContext;
};

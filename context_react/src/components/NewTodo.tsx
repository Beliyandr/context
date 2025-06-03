import React from "react";

import { useActions } from "../hooks/useActions";

export const NewTodo = () => {
  console.log("NewTodo rendered");

  const { addTodo } = useActions();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = (e.target as HTMLFormElement).todo.value as string;
    if (!title) return;

    addTodo({
      id: Math.random().toString(),
      title,
      completed: false,
    });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" name="todo" placeholder="Learn React ..." />
    </form>
  );
};

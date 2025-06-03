import React, { memo } from "react";
import { Todo } from "../types/Todo";
import { useTodo } from "../hooks/useTodo";
import { useActions } from "../hooks/useActions";

export const TodoItem = memo(({ id, completed, title }: Todo) => {
  console.log(`TodoItem ${title} rendered`);

  const { removeTodo, toggleTodo } = useActions();

  return (
    <li className="todo-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </li>
  );
});

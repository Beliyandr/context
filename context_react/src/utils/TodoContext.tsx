import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Todo } from "../types/Todo";

type TodoContext = {
  todos: Todo[];
  totalTodos: number;
};

type TodoActionsType = {
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContext | null>(null);
export const TodoActionsContext = React.createContext<TodoActionsType | null>(
  null
);

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const totalTodos = todos.length;

  const addTodo = useCallback((todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const removeTodo = useCallback((id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const value = useMemo(() => ({ todos, totalTodos }), [todos, totalTodos]);

  const actions = useMemo(
    () => ({ addTodo, toggleTodo, removeTodo }),
    [addTodo, toggleTodo, removeTodo]
  );

  return (
    <TodoContext.Provider value={value}>
      <TodoActionsContext.Provider value={actions}>
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};

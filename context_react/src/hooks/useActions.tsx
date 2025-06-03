import React, { useContext } from "react";
import { TodoActionsContext } from "../utils/TodoContext";

export const useActions = () => {
  const actionsContext = useContext(TodoActionsContext);

  if (!actionsContext) {
    throw new Error("useActions must be used within a TodoProvider");
  }

  return actionsContext;
};

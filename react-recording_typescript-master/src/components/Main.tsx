import React, { useContext, useReducer } from "react";
import { Lang } from "../types/Lang";
import { DispatchContext, StateContext } from "../utils/Store";

export const Main = () => {
  const dispatch = useContext(DispatchContext);
  const { amount } = useContext(StateContext);

  const decrease = () => {
    // setAmount((x) => x - 1);
    dispatch({ type: "decrease" });
  };

  const increase = () => {
    // setAmount((x) => x + 1);
    dispatch({ type: "increase" });
    dispatch({ type: "add", payload: 10 });
  };

  return (
    <main
      style={{
        padding: "20px",
        display: "flex",
        gap: "10px",
        alignItems: "start",
      }}
    >
      <button onClick={decrease}>-</button>
      {amount}
      <button onClick={increase}>+</button>
    </main>
  );
};

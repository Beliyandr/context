import { FC, useContext, useState } from "react";
import { Lang } from "../types/Lang";
import { LangContext } from "../utils/LangContext";
import { DispatchContext, StateContext } from "../utils/Store";

export const LangSelector = () => {
  const dispatch = useContext(DispatchContext);
  const { lang } = useContext(StateContext);

  return (
    <select
      value={lang}
      onChange={(event) =>
        dispatch({ type: "setLang", payload: event.target.value as Lang })
      }
    >
      <option value={Lang.EN}>English</option>
      <option value={Lang.UA}>Українська</option>
    </select>
  );
};

import React, { FC, useMemo, useState } from "react";
import { Lang } from "../types/Lang";

export const LangContext = React.createContext({
  lang: Lang.EN,
  setLang: (lang: Lang) => {},
});

type Props = {
  children: React.ReactNode;
};

export const LangProvider: FC<Props> = ({ children }) => {
  const [lang, setLang] = useState(Lang.EN);

  const value = useMemo(
    () => ({
      lang,
      setLang,
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

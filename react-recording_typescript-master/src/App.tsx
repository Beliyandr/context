import { useReducer, useState } from "react";
import { Footer } from "./components/Footer";
// import { Lang } from "./types/Lang";
import { LangSelector } from "./components/LangSelector";
import { HomePage } from "./components/HomePage";
import { LangContext, LangProvider } from "./utils/LangContext";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <div className="App">
      <LangProvider>
        <header className="header">
          Mate academy
          <LangSelector />
        </header>

        <main>
          <Main />
          <HomePage />
        </main>

        <Footer />
      </LangProvider>
    </div>
  );
};

import "./App.css";
import { createContext, useContext } from "react";

const TitleContext = createContext();

const LevelThree = () => {
  const value = useContext(TitleContext);

  return <h1>{value}</h1>;
};

const LevelTwo = () => <LevelThree />;
const LevelOne = () => <LevelTwo />;

function App() {
  return (
    <div className="App">
      <TitleContext.Provider value="simpleText">
        <LevelOne />
      </TitleContext.Provider>
    </div>
  );
}

export default App;

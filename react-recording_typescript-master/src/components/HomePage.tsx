import { translate } from "../utils/translate";
import { Lang } from "../types/Lang";
import { useContext } from "react";
import { LangContext } from "../utils/LangContext";

export const HomePage = () => (
  <div className="HomePage">
    <HomePageTitle />
    <HomePageContent />
  </div>
);

const HomePageTitle = () => {
  const {lang} = useContext(LangContext);

  return <h1>{translate("homePage.title", lang)}</h1>;
};

const HomePageContent = () => {
  const {lang} = useContext(LangContext);

  return <section>{translate("homePage.content", lang)}</section>;
};

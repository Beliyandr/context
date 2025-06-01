import { translate } from "../utils/translate";
import { useContext } from "react";
import { StateContext } from "../utils/Store";

export const Footer = () => {
  const { lang } = useContext(StateContext);

  return <footer>{translate("footer.greeting", lang)}</footer>;
};

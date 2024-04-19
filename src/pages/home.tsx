import { useTranslation } from "next-i18next";
import Home from "./home/Home";

const PageHome = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Home />
    </>
  );
};

export default PageHome;

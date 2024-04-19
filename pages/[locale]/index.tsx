import Home from "@/pages/home/Home";
import { getStaticPaths, makeStaticProps } from "@/utilities/getStatic";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;

const getStaticProps = makeStaticProps(["common"]);
export { getStaticProps, getStaticPaths };

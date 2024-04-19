import React from "react";
import { useTranslation } from "next-i18next";
import {
  SVGClients1,
  SVGClients2,
  SVGClients3,
  SVGClients4,
  SVGClients5,
  SVGClients6,
  SVGClients7,
  SVGClients8,
  SVGClients9,
} from "../svgs";

const OurClients = () => {
  const { t } = useTranslation(["common"]);

  return (
    <section id="our-clients" className="clients">
      <div className="container-fluid">
        <div className="text-container">
          <h2 className="big">{t("OUR_CLIENTS")}</h2>
          <p className="section-desc-p">{t("CLIENTS_DESC")}</p>
        </div>
        {/* prettier-ignore */}
        <div data-aos="fade-right" className="clients__logo">
           <div className="svg-wrapper"><SVGClients1 /></div>
           <div className="svg-wrapper"><SVGClients2 /></div>
           <div className="svg-wrapper"><SVGClients3 /></div>
           <div className="svg-wrapper"><SVGClients4 /></div>
           <div className="svg-wrapper"><SVGClients5 /></div>
           <div className="svg-wrapper"><SVGClients6 /></div>
           <div className="svg-wrapper"><SVGClients7 /></div>
           <div className="svg-wrapper"><SVGClients8 /></div>
           <div className="svg-wrapper"><SVGClients9 /></div>
      </div>
      </div>
    </section>
  );
};

export default OurClients;

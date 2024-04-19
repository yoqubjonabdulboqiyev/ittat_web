import LinkArrow from "@/components/LinkArrow";
import React from "react";
import { useTranslation } from "next-i18next";
import { SVGServices1, SVGServices2, SVGServices3 } from "../svgs";
import { services } from "../texts";

const Services = () => {
     const { t } = useTranslation(["common"]);
     return (
          <section id="services" className="services">
               <div className="container-fluid">
                    <div className="center-text">
                         <h2 className="big">{t("SERVICES")}</h2>
                         <p className="desc">{t("SERV_DESC")}</p>
                         <LinkArrow href="#">{t("VIEW_SERVICES")}</LinkArrow>
                    </div>

                    <div className="services-container">
                         <div data-aos="fade-left" className="service">
                              <SVGServices1 />
                              <h4>{t("SERV_DESIGN")}</h4>
                              <ul>
                                   {services.design.map((s, i) => (
                                        <li key={i}>
                                             <span>•</span>
                                             {t(s)}
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         <div data-aos="fade-left" className="service">
                              <SVGServices2 />
                              <h4>{t("MOBILE")}</h4>
                              <ul>
                                   {services.mobile.map((s, i) => (
                                        <li key={i}>
                                             <span>•</span>
                                             {t(s)}
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         <div data-aos="fade-left" className="service">
                              <SVGServices3 />
                              <h4>{t("WEB")}</h4>
                              <ul>
                                   {services.development.map((s, i) => (
                                        <li key={i}>
                                             <span>•</span>
                                             {t(s)}
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Services;

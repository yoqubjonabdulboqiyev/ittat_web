import React from "react";
import { useTranslation } from "next-i18next";
import LanguageDropdown from "./LanguageDropdown";

type MenuProps = {
     setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
     isOpen: boolean;
};

const Menu = ({ setIsOpen, isOpen }: MenuProps) => {
     const handleClick = () => {
          setIsOpen(false);
     };
     const { t } = useTranslation();
     return (
          <>
               <div className={`menu ${isOpen ? "open" : "hidden"}`}>
                    <div className="menu__left">
                         <ol>
                              <li>
                                   <a onClick={handleClick} href="#works">
                                        {t("WORKS")}
                                   </a>
                              </li>
                              <li>
                                   <a onClick={handleClick} href="#services">
                                        {t("SERVICES")}
                                   </a>
                              </li>

                              <li>
                                   <a onClick={handleClick} href="#courses">
                                        {t("OUR_COURSES")}
                                   </a>
                              </li>

                              <li>
                                   <a onClick={handleClick} href="#our_team">
                                        {t("OUR_TEAM")}
                                   </a>
                              </li>
                              <li>
                                   <a onClick={handleClick} href="#our-clients">
                                        {t("OUR_CLIENTS")}
                                   </a>
                              </li>

                              <li>
                                   <a onClick={handleClick} href="#lets-work">
                                        {t("LETS_TALK")}
                                   </a>
                              </li>
                         </ol>
                    </div>
                    <div className="menu__right">
                         <div className="up__right">
                              <ol>
                                   <p className="title">{t("FOLLOW_US")}</p>
                                   <li>
                                        <a
                                             href="https://www.instagram.com/it_tat_samarkand"
                                             target="_blank"
                                             rel="noreferrer"
                                        >
                                             Instagram
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="https://t.me/it_tat_samarqand"
                                             target="_blank"
                                             rel="noreferrer"
                                        >
                                             Telegram
                                        </a>
                                   </li>
                              </ol>
                         </div>
                         <div className="down__right">
                              <ol>
                                   <p className="title">{t("GET_IN_TOUCH")}</p>
                                   <li className="phone-email">
                                        {t("PHONE_NUMBER")}
                                   </li>
                                   <li>
                                        <a href="tel:998901020440">
                                             (90) 102 04 40
                                        </a>{" "}
                                        ,{" "}
                                        <a href="tel:998886110440">
                                             (88) 611 04 40{" "}
                                        </a>
                                   </li>
                                   <li className="phone-email">{t("EMAIL")}</li>
                                   <li>
                                        <a href="mailto:ittat01@gmail.com">
                                        ittat@gmail.com
                                        </a>
                                   </li>
                              </ol>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Menu;

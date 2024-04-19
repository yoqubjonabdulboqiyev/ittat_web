import { useEffect, useState } from "react";
import { LogoBlack } from "../../pages/home/svgs";
import {
  addBodyPaddingOnScrollRemove,
  removeBodyPaddingOnScrollRemove,
} from "../../utilities/style-utils";
import LanguageDropdown from "./LanguageDropdown";
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const Body = document.getElementById("body");
    if (isOpen) {
      addBodyPaddingOnScrollRemove();
      Body?.classList.add("overflow-hidden");
    } else {
      removeBodyPaddingOnScrollRemove();
      Body?.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <>
      <header className={`nav ${isOpen ? "open" : ""}`}>
        <div className="container-fluid">
          <a href="/" className="navLogo">
            {/* <Logo /> */}
            <LogoBlack />
          </a>
          <span className="lang-menu-container d-flex align-items-center">
            <LanguageDropdown />
            <div className="nav-btn-container" onClick={() => setIsOpen((prev) => !prev)}>
              <div className="nav__button">
                <span
                  className="nav__icon"
                  aria-label="toggle navigation menu"
                ></span>
              </div>
            </div>
          </span>
        </div>
      </header>
      <nav className="invisible-for-seo">
        <a href="/uz">UZ</a>
        <a href="/ru">RU</a>
        <a href="/en">EN</a>
      </nav>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`menu-wrapper ${isOpen && "open"}`}></div>
    </>
  );
};

export default Header;

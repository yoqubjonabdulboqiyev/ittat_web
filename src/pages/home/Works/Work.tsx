import { useState, useEffect, useRef } from "react";
import LinkArrow from "../../../components/LinkArrow";
import { GradientCircle } from "../svgs";

import { motion } from "framer-motion";
// import { useHover } from "../../../utilities/useHover";
import { useTranslation } from "next-i18next";
import { useHover } from "usehooks-ts";

type WorkPropsType = {
  title: string;
  p: string;
  desc: string;
  aboutApp: string;
  linkToWork: string;
  gradientColors: string[];
  i: number;
  setIsBackDropOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Work({
  title,
  p,
  desc,
  aboutApp,
  linkToWork,
  gradientColors,
  i,
  setIsBackDropOpen,
}: WorkPropsType) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // const { hoverProps, isHovered } = useHover<HTMLAnchorElement>();
  const elRef = useRef<HTMLAnchorElement | null>(null);
  const isHovered = useHover(elRef);

  useEffect(() => {
    if (isHovered) {
      setX(-25);
      setY(-25);
      setIsBackDropOpen(true);
    }
    if (!isHovered) {
      setX(0);
      setY(0);
      setIsBackDropOpen(false);
    }
  }, [isHovered, setIsBackDropOpen]);

  const { t } = useTranslation();
  return (
    <section
      // give id only to first work
      {...(i === 0 ? { id: "works" } : {})}
      className={`project-showcase pos-relative ${
        isHovered ? "blur" : ""
      } container-fluid d-flex flex-column justify-content-center`}
    >
      <div
        data-aos="fade-right"
        className="container-fluid section--full-screen d-flex"
      >
        <div className="text-container text-container--std d-flex flex-column">
          <p className="top-text">{title}</p>

          <div className="main-text d-flex flex-column">
            <h2>{t(p)}</h2>
            <p className="desc">{t(desc)}</p>
            <h4>{t(aboutApp)}</h4>
          </div>

          <LinkArrow href={linkToWork}>{t("SEE_PROJECT")}</LinkArrow>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="image-container"
      >
        <a
          ref={elRef}
          href={linkToWork}
          target="_blank"
          rel="noreferrer"
          className="image-wrapper"
        >
          <motion.div animate={{ x, y }} transition={{ type: "spring" }}>
            <img src={`/images/${i + 1}.png`} alt="" />
          </motion.div>
        </a>
        <GradientCircle
          leftColor={`${gradientColors[0]}`}
          rightColor={`${gradientColors[1]}`}
          isHovered={isHovered}
        />
      </div>
    </section>
  );
}

export default Work;

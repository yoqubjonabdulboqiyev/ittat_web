// import { Container, Card, Row, Text, Link as NLink } from "@nextui-org/react";
import SimpleButton from "../../components/SimpleButton";
// prettier-ignore
import { useTranslation } from "next-i18next";
import ContactModal from "./ContactModal";
import Works from "./Works";
import { SVGProjectBackground, ShowcaseBGImage } from "./svgs";
import Courses from "./Courses";
import OurTeam from "./OurTeam";
import OurClients from "./OurClients";
import Services from "./Services";

const Home = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <section className="showcase">
        <div className="container-fluid d-flex flex-column justify-content-center">
          <div className="text-container">
            <div className="top-hash">#{t("HERO_TOP")}</div>
            <h1>{t("HERO_T")}</h1>
            <a href="#lets-work">
              <SimpleButton css={{ padding: "25px 20px 25px 16px" }}>
                {t("HERO_B")}
              </SimpleButton>
            </a>
          </div>
          <div data-aos="fade-left" className="right-image">
            <ShowcaseBGImage />
          </div>
          <div className="bottom-text">{t("HERO_IN_MARKET")}</div>
        </div>
      </section>

      <Works />

      <Services />
      {/* ? Our courses */}
      <Courses />

      <OurTeam />

      <OurClients />

      <section id="lets-work" className="work-together">
        <div className="container-fluid">
          <div className="text-container">
            <h2 className="big">
              {t("PROJECT_IN_MIND_1")}
              <br />
              {t("PROJECT_IN_MIND_2")}
            </h2>
            <p className="section-desc-p">{t("PROJECT_IN_MIND_DESC")}</p>
            <span
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="150"
            >
              <ContactModal />
            </span>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="bg-image">
          <SVGProjectBackground />
        </div>
      </section>
    </>
  );
};

export default Home;

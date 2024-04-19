import { Swiper, SwiperSlide } from "swiper/react";
import { teamData } from "./team-data";
import { useTranslation } from "next-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay, Pagination } from "swiper/modules";

const OurTeam = () => {

     const { t } = useTranslation(["common"]);

     return (
          <section className="team-container">
               <div className="container-fluid">
                    <div className="ourteam" id="our_team">
                         <h2>{t('OUR_TEAM')}</h2>
                         <p className="desc">
                              {t("OUR_TEAM_SUBTITLE")}
                         </p>
                    </div>

                    <Swiper
                         slidesPerView={4}
                         spaceBetween={10}
                         pagination={{
                              clickable: true,
                         }}
                         autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            loop={true}
                         breakpoints={{
                              "@0.00": {
                                   slidesPerView: 1,
                                   spaceBetween: 10,
                              },
                              "@0.75": {
                                   slidesPerView: 2,
                                   spaceBetween: 20,
                              },
                              "@1.00": {
                                   slidesPerView: 3,
                                   spaceBetween: 40,
                              },
                              "@1.50": {
                                   slidesPerView: 4,
                                   spaceBetween: 50,
                              },
                         }}
                         modules={[Pagination, Autoplay]}
                         className="mySwiper"
                    >
                         {teamData.map(({ imgUrl, name, position }, i) => {
                              return (
                                   <SwiperSlide key={i}>
                                        <div className="card">
                                             <div className="imgBx">
                                                  <img
                                                       src={imgUrl}
                                                       alt="images"
                                                  />
                                             </div>
                                             <div className="details">
                                                  <h2>
                                                       {name}
                                                  </h2>
                                                       <span>{t('ROLE')}: {position}</span>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                              );
                         })}
                    </Swiper>
               </div>
          </section>
     );
};

export default OurTeam;

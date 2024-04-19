import React, { Dispatch, SetStateAction } from "react";
import { ICourseData } from "./data";
import { useTranslation } from "next-i18next";

interface IProps extends ICourseData {
     onClick: () => void;
}

const Course = ({
     onClick,
     name2,
     img,
     teacher,
     technologies,
     price,
     duration,
     discount,
     id,
     programist,
     offOnnCourse
}: IProps) => {
     const { t } = useTranslation(["common"]);

     return (
          <div className="courses-item" onClick={onClick}>
               <div className="selection4">
                    <button className="selection3">
                         {t(offOnnCourse)}
                    </button>
                    <button className="selection3">{t(programist)}</button>
               </div>

               <p className="selection">{t(name2)}</p>
               <img
                    className={`selection10 ${"course-img" + id}`}
                    src={img.src}
                    alt=""
               />

               <div className="tech-container">
                    {technologies?.map((tech, i) => {
                         return (
                              <button key={i} className="selection5">
                                   {tech}
                              </button>
                         );
                    })}
               </div>

               {/* <p style={{ top: "0px", position: "relative" }}>{teacher}</p> */}

               <div className="course_container">
                    {/* Kurs Davomiyligi : */}
                    <div className="price-container">
                         <p className="duration-p">{t("COURSE_DURATION")}:</p>
                         <button className="price">{duration + t('MONTH')}</button>
                    </div>
                    <div className="price-container">
                         <p className="duration-p">
                              {t("MONTHLY_PAYMENT  :")}:
                         </p>
                         <button className="price">{price + t('PRICE_MONTH')}</button>
                    </div>
               </div>
               <p className="discount-container">
                    {t('DISCOUNT')} 
                    <strong></strong>
               </p>
               
          </div>
     );
};

export default Course;

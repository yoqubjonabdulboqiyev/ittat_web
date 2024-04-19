import React, { useState } from "react";
import { coursesData } from "./data";
import { useTranslation } from "next-i18next";
import Course from "./course";
import ChooseCourseModal, { TRegisterData } from "./choose-course-modal";
import { useApiMutation } from "@/hooks/queryHooks";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenCourse, setChosenCourse] = useState<number | null>(null);
  const { t } = useTranslation(["common"]);

  const { mutate, status, error } = useApiMutation<TRegisterData>(
    "registration/",
    "post"
  );

  const handleClick = (id: number) => () => {
    setChosenCourse(id);
    console.log("chosenCOurs:", chosenCourse);
  };

  return (
    <section id="courses" className="courses">
      <div className="container-fluid">
        <div className="course-center">
          <h2 className="big">{t("COURSES")}</h2>
          <p className="desc">{t("COURSES_SUBTITLE")}</p>
        </div>

        <div data-aos="fade-left">
          <div className="courses-container">
            {coursesData.map((item, index) => (
              <Course key={index} onClick={handleClick(item.id)} {...item} />
            ))}
          </div>
        </div>
        <ChooseCourseModal
          mutate={mutate}
          chosenCourse={chosenCourse}
          setChosenCourse={setChosenCourse}
        />
      </div>
    </section>
  );
};

export default Courses;

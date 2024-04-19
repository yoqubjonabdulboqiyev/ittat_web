import { StaticImageData } from "next/image";
import fontGrf from "../../../assets/1111111.png";
import font from "../../../assets/23232322232.png";
import fontRbt from "../../../assets/3d.png";
import fontKs from "../../../assets/777.png";
import fontAnd from "../../../assets/77777.png";
import fontKids from "../../../assets/nnn.png";
import font1 from "../../../assets/nnn44444.png";
import foundation from "../../../assets/foundation.png";
import roboKids from "../../../assets/robotics_kids.png";
import { useTranslation } from "next-i18next";

interface ICourseData {
  id: number;
  programist: string;
  name2: string;
  teacher: string;
  price: string;
  duration: string;
  discount?: string;
  technologies: string[];
  img: StaticImageData;
  offOnnCourse: string
}

let coursesData: ICourseData[] = [
  {
    id: 0,
    programist: "PROGRAMMING",
    name2: "FRONTEND",
    teacher: "Usmonov  Sardor",
    price: "500",
    duration: "6 + 1",
    discount: "20%",
    technologies: ["HTML", "CSS", "SCSS", "Bootstrap", "Javascript", "React", "Redux", "Typescript"],
    img: font,
    offOnnCourse: "OFFLINE_COURSE"
    
  },
  {
    id: 1,
    programist: "PROGRAMMING",
    name2: "BACKEND",
    teacher: "Tursunov  Baxtiyor",
    price: "550",
    duration: "6 + 1",
    discount: "20%",
    technologies: ["Python", "PostgreSQL", "Mysql", "Django", "Telegram bot", "Django Rest", "Fast API", "Docker"],
    img: font1,
    offOnnCourse: "OFFLINE_COURSE"

  },
  {
    id: 2,
    programist: "PROGRAMMING",
    name2: "ANDROID",
    teacher: "Eshmatov Dilshod",
    price: "500",
    duration: " 6 + 1",
    technologies: ["Java","Android", "Flutter", "Dart", "OOP", "Axios", "Firebase", "JSON", "IOS", "WebSocket"],
    img: fontAnd,
    discount: "20%",
    offOnnCourse: "OFFLINE_COURSE"

  },
  {
    id: 3,
    programist: "PROGRAMMING",
    name2: "ROBOTO",
    teacher: "Djo'rayev Sherzod",
    price: "700",
    duration: " 6 + 1",
    technologies: ["C++", "Python", "Arduino", "Sxema", "AI", "WebSocket", "ROS", "LiDAR", "Servo Motors", "MQTT"],
    img: fontRbt,
    discount: "20%",
    offOnnCourse: "OFFLINE_COURSE"

  },

  {
    id: 4,
    programist: "PROGRAMMING",
    name2: "ROBOTO_KIDS",
    teacher: "Ibragimova Gulnoza",
    discount: "20%",
    price: "500",
    duration: " 2",
    technologies: ["Lego", "Funny Games", "Logical Operators", "Znatok", "solving problems"],
    img: roboKids,
    offOnnCourse: "OFFLINE_COURSE"

  },
  {
    id: 5,
    programist: "DESIGN",
    name2: "GRAPHIC_DESIGN",
    teacher: "Baxtiyorov Sardor",
    price: "450",
    duration: " 6 + 1",
    discount: "20%",
    technologies: [
      "photoshop",
      " illustrator",
      "corel draw",
      "adobe XD",
      "INDESIGN",
    ],
    img: fontGrf,
    offOnnCourse: "OFFLINE_COURSE"

  },
  {
    id: 6,
    programist: "COMPUTER",
    name2: "COMP_LITERACY",
    teacher: "Xudoyqulov Shoxruz",
    discount: "20%",
    price: "400",
    duration: " 2",
    technologies: [
      "Word",
      "Excel",
      "PowerPoint",
      "Hotkeys",
      "Interntet",
      "Hardware",
      "Software"
    ],
    img: fontKs,
    offOnnCourse: "OFFLINE_COURSE"

  },
  {
    id: 7,
    programist: "COMPUTER",
    name2: "COMP_LITERACY_KIDS",
    teacher: "Ibragimova Gulnoza",
    discount: "20%",
    price: "600",
    duration: " 3",
    technologies: ["Word", "PowerPoint", "Paint", "Scratch", "Hardware", "Software", "Typing", "Funny Games"],
    img: fontKids,
    offOnnCourse: "OFFLINE_COURSE"

  },

  {
    id: 8,
    programist: "PROGRAMMING",
    name2: "Foundation",
    teacher: "Ibragimova Gulnoza",
    discount: "20%",
    price: "450",
    duration: " 2",
    technologies: ["C#", ".Net", "Logical Operators", "Algorithms", "solving problems", "OOP"],
    img: foundation,
    offOnnCourse: "OFFLINE_COURSE"

  },

  
];

export { coursesData };
export type { ICourseData };

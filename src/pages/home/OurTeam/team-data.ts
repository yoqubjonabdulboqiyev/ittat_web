import graphTeacher from '../../../assets/graph_teacher.jpg' ;
import frontTeacher from '../../../assets/frontend-teacher.jpg' ;
import robotTeacher from '../../../assets/robot.jpg' ;
import smmManager from '../../../assets/smm-manager.jpg' ;
import yoqubBackend from '../../../assets/YoqubjonBackend.jpg' ;
import admin from '../../../assets/admin.jpg';
import manager from '../../../assets/manager.jpg';
import compLit from '../../../assets/computer-litjpg.jpg';
import foundationMen from '../../../assets/foundation.jpg';
import golibBack from '../../../assets/GolibjonBack.jpg';
import androidMentor from '../../../assets/android.png';
import salesManager from '../../../assets/sales.jpg';












interface ITeamData {
  name: string;
  position: string;
  imgUrl: string;
}

const teamData: ITeamData[] = [
  {
    name: "Nushofarin Murodova",
    position: "Designer, mentor",
    imgUrl:graphTeacher.src
  },
  {
    name: "Islom Xolmurodov",
    position: "Robotics, mentor",
    imgUrl:robotTeacher.src,
  },
  {
    name: "Shaxzod Muradov",
    position: "Front-End ReactJS, mentor",
    imgUrl:frontTeacher.src,
  },
  {
    name: "Abdulaziz Rasulov",
    position: "SMM Manager",
    imgUrl: smmManager.src,
  },
  {
    name: "Oydinoy Muxtorova",
    position: "Computer literacy, mentor",
    imgUrl: compLit.src,
  },

  {
    name: "G'olibjon Davronov",
    position: "Python, Django , mentor",
    imgUrl: golibBack.src,
  },

 

  {
    name: "Mohinisobonu",
    position: "Aministrator",
    imgUrl: admin.src,
  },

  {
    name: "Bobur Bobodo'stov",
    position: "Study Manager",
    imgUrl: manager.src,
  },

  {
    name: "Muhammad G'ulomhusinov",
    position: "C#, .Net, mentor",
    imgUrl: foundationMen.src,
  },

  {
    name: "Rasul Ashurov",
    position: "Sales Manager",
    imgUrl: salesManager.src,
  },


  {
    name: "Yoqubjon Abdulboqiev",
    position: "Back-End(NodeJS), mentor",
    imgUrl: yoqubBackend.src,
  },

  {
    name: "Jaloliddin Yunusov",
    position: "Android(Flutter), mentor",
    imgUrl: androidMentor.src,
  }
];

export { teamData };
export type { ITeamData };

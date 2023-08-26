// import React from "react";
// import {rohithimage} from "../firstpage/rohithimage.jpeg";
// import { BiSolidHappyHeartEyes } from 'react-icons/bi';


// export const Datamenu =[
//     {
//       "id": 1,
//       img: require('../firstpage/rohithimage.jpeg'),
//       "name": "John Doe",
//       "time":"03 may 2001",
//       "role": "Full stack web developer on Facebook",
//       "exp":"new",
//       "sti":<BiSolidHappyHeartEyes size={20} color="#f5d664"/>,
//       "per":"75%"
//     },
//     {
//         "id": 1,
//         img: require('../firstpage/rohithimage.jpeg'),
//         "name": "John Doe",
//         "time":"03 may 2001",
//         "role": "Full stack web developer on Facebook",
//         "exp":"new",
//         "sti":<BiSolidHappyHeartEyes size={20} color="#f5d664"/>,
//         "per":"75%"
//       }
//   ];



// Datamenu.js
import { BiSolidHappyHeartEyes } from 'react-icons/bi';

export const Datamenu = [
  {
    "id": 1,
    img: require('../firstpage/rohithimage.jpeg'),
    "name": "Rohith Yadlapalli",
    "time": "03-05-2001",
    "role": "Full stack web developer on Facebook",
    "exp": "Experience",
    "sti": <BiSolidHappyHeartEyes size={20} color="#f5d664" />,
    "per": "75%"
  },
  {
    "id": 2,
    img: require('../firstpage/ProfilePhoto.png'),
    "name": "Gayathri ",
    "time": "15-05-2001",
    "role": "Full stack web developer on Hcl",
    "exp": "Fresher",
    "sti": <BiSolidHappyHeartEyes size={20} color="#f5d664" />,
    "per": "81%"
  },
  {
    "id": 3,
    img: require('../firstpage/rohithimage.jpeg'),
    "name": "Likhith ",
    "time": "20-03-2004",
    "role": "Web developer using React js",
    "exp": "Experience",
    "sti": <BiSolidHappyHeartEyes size={20} color="#f5d664" />,
    "per": "64%"
  },
  {
    "id": 4,
    img: require('../firstpage/rohith.jpg'),
    "name": "Bhavani ",
    "time": "31-07-1998",
    "role": "API integration with JDBC",
    "exp": "Fresher",
    "sti": <BiSolidHappyHeartEyes size={20} color="#f5d664" />,
    "per": "90%"
  },
  {
    "id": 5,
    img: require('../firstpage/rohithimage.jpeg'),
    "name": "Deekshitha ",
    "time": "17-12-2007",
    "role": "MERN stack developer",
    "exp": "Experience",
    "sti": <BiSolidHappyHeartEyes size={20} color="#f5d664" />,
    "per": "85%"
  },
  {
    "id": 6,
    img: require('../firstpage/rohithimage.jpeg'),
    "name": "Haritha ",
    "time": "03-06-1996",
    "role": "Full stack developer",
    "exp": "Fresher",
    "sti": <BiSolidHappyHeartEyes size={20} color="#f5d664" />,
    "per": "69%"
  },
];

export function addUser(newUser) {
  Datamenu.push({
    ...newUser,
    id: Datamenu.length + 1,
    sti: <BiSolidHappyHeartEyes size={20} color="#f5d664" />,
  });
}

import {FaPlayCircle} from "react-icons/fa"
import {MdBusinessCenter} from "react-icons/md"
import {HiChatBubbleLeftRight} from "react-icons/hi2"
import {FaLaptop} from "react-icons/fa"
import icon1 from "../../images/submenuicons/icon1.png"
import icon2 from "../../images/submenuicons/icon2.png"
import icon3 from "../../images/submenuicons/icon3.png"
import icon4 from "../../images/submenuicons/icon4.png"

export const SideData = [
    {
        title : "Features",
        submenu: [
            {
              title: "Chat",
              path: "",
             
            },
            {
              title: "Socials",
              path: "",
  

            },
            {
              title: "Business",
              path: "",
            

            },
            {
              title: "Developers",
              path: "",
             

            },
          ],
    },
    {
        title : "Business"

    },
    {
        title : "Developers"

    }
] ;


export const submenuData = [
    {
      title: "Chat",
      path: "",
      icon:<img style={{height:"20px"}} src={icon1}></img>,
    },
    {
      title: "Socials",
      path: "",
      icon:<img style={{height:"20px"}} src={icon2}></img>

    },
    {
      title: "Business",
      path: "",
      icon:<img style={{height:"20px"}} src={icon3}></img>

    },
    {
      title: "Developers",
      path: "",
      icon:<img style={{height:"20px"}} src={icon4}></img>

    },
  ]
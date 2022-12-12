import slide1 from "../../../images/socialspage/slide1.svg"
import slide2 from "../../../images/socialspage/slide2.svg"
import slide3 from "../../../images/socialspage/slide3.svg"
import slide4 from "../../../images/socialspage/slide4.svg"
import slide5 from "../../../images/socialspage/slide5.svg"
import icon1 from "../../../images/socialspage/icon1.svg"
import icon2 from "../../../images/socialspage/icon2.svg"
import icon3 from "../../../images/socialspage/icon3.svg"
import icon4 from "../../../images/socialspage/icon4.svg"
import icon5 from "../../../images/socialspage/icon5.svg"
import { FaTelegramPlane, FaThumbsUp, FaVideo,FaPencilAlt, FaCamera } from "react-icons/fa"



export const SlideData = [
  {
    id: "slide1",
    icon: <FaCamera/>,
    active:false,
    phoneImage: slide1,
    text: "Capture your moments anyday at your convenience",
  },
  {
    id: "slide2",
    active:false,
    icon:<FaVideo/>,
    phoneImage: slide2,
    text: "Share moments as videos or photos",
  },
  {
    id: "slide3",
    icon: <FaTelegramPlane/>,
    active:false,
    phoneImage: slide3,
    text: "Reply to a moments in chat",
  },
  {
    id: "slide4",
    icon: <FaThumbsUp/>,
    active:false,
    phoneImage: slide4,
    text: "Like a moments react to it",
  },
  {
    id: "slide5",
    active:false,
    icon: <FaPencilAlt/>,
    phoneImage: slide5,
    text: "Caption moments\ with beautiful font\n styles and emojis",
  },
];


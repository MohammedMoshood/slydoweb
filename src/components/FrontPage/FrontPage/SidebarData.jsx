import icon1 from "../../../images/submenuicons/icon1.png";
import icon2 from "../../../images/submenuicons/icon2.png";
import icon3 from "../../../images/submenuicons/icon3.png";
import icon4 from "../../../images/submenuicons/icon4.png";

export const SideData = [
  {
    title: "Features",
    submenu: [],
  },
  {
    title: "Business",
    path: "/business",
  },
  {
    title: "Developers",
    style: { border: "none" },
    path: "/developers",
  },
];

export const submenuData = [
  {
    title: "Chat",
    path: "/chat",

    icon: <img style={{ height: "20px" }} src={icon1}></img>,
  },
  {
    title: "Socials",
    path: "/socials",
    icon: <img style={{ height: "20px" }} src={icon2}></img>,
  },
  {
    title: "Business",
    path: "/business",
    icon: <img style={{ height: "20px" }} src={icon3}></img>,
  },
  {
    title: "Developers",
    path: "/developers",
    icon: <img style={{ height: "20px" }} src={icon4}></img>,
  },
];

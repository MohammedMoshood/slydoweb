import {
  FaWallet,
  FaRegPaperPlane,
  FaShoppingBag,
  FaInstagram,
  FaDesktop,
} from "react-icons/fa";

import {RiInstagramFill}  from "react-icons/ri"
import {BsHandbagFill} from "react-icons/bs"
import {IoWallet} from "react-icons/io5"

export const card1 = {
  icon: <RiInstagramFill />,
  text:"Socials",
  style: {
    fontSize:"43px",
    backgroundColor: "#D0FFE7",
    color: "#2ACE79",
  },
};

export const card2 = {
  icon: <BsHandbagFill />,
  text:"Super Store",
  style: {
    
    backgroundColor: "#FFE0BD",
    color: "#AD6716",
  },
};

export const card3 = {
  icon: <IoWallet />,
  text:"Wallet",
  style: {
    fontSize:"40px",
    backgroundColor: "#C2CEFD",
    color: "#4060DB",
  },
};
export const card4 = {
  icon: <FaDesktop />,
  text:"Developer API" ,
  style: {
    backgroundColor: "#F3E4FF",
    color: "#5E109D",
  },
};
export const card5 = {
  icon: <FaRegPaperPlane />,
  text:"Ask" ,
  style: {
    fontSize:"33px",

    backgroundColor: "#F8F8F8",
    color: "#909090",
  },
};

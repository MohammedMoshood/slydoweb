import React from "react";
import {
  SidebarContainer,
  SidebarHead,
  BackButton,
  SubmenuDiv,
  SubmenuItem,
  SubmenuIcon,
  BottomDiv,
  LoginButton,
  SidebarLogo,
  CloseDiv,
  Fade,
  HeadRight,
} from "../../styles/FrontPage/SidebarElements";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { submenuData } from "./SidebarData";
import Logo from "../../images/slydologo.png";
import {HiX} from "react-icons/hi"

import User from "../../layout/header/dropdown/user/User";

const Submenu = ({ sidebarClose, showsubmenu, closeSubmenu }) => {
  const user = localStorage.getItem("accessToken");
  const slydouser = JSON.parse(user);
  return (
    <SidebarContainer showsubmenu={showsubmenu}>
      <SidebarHead style={{ border: "none" }}>
        <SidebarLogo src={Logo} alt="slydo"></SidebarLogo>
        <HeadRight>
          {slydouser && <User />}
          <CloseDiv onClick={sidebarClose}><HiX/></CloseDiv>
        </HeadRight>
      </SidebarHead>
      <Fade>
        <SidebarHead style={{ paddingLeft: "20px" }}>
          <BackButton onClick={closeSubmenu}>
            <MdKeyboardArrowLeft />
            Back
          </BackButton>
        </SidebarHead>
        <SubmenuDiv>
          {submenuData.map((item, index) => {
            return (
              <SubmenuItem item={item} key={index}>
                <SubmenuIcon > {item.icon} </SubmenuIcon> {item.title}
              </SubmenuItem>
            );
          })}
        </SubmenuDiv>
      </Fade>
      <BottomDiv>
        {slydouser ? (
          <LoginButton style={{ fontSize: "12px" }} to={`${process.env.PUBLIC_URL}/dashboard`}>
            Go to Dashboard <MdKeyboardArrowRight />{" "}
          </LoginButton>
        ) : (
          <LoginButton to={`${process.env.PUBLIC_URL}/auth-login`}>
            Login <MdKeyboardArrowRight />
          </LoginButton>
        )}
      </BottomDiv>
    </SidebarContainer>
  );
};

export default Submenu;

import React, { useState } from "react";
import {
  SidebarOverlay,
  SidebarContainer,
  SidebarHead,
  SidebarLogo,
  CloseDiv,
  MenuDiv,
  MenuItem,
  BottomDiv,
  LoginButton,
  HeadRight,
} from "../../styles/FrontPage/SidebarElements";
import Logo from "../../images/slydologo.png";
import { SideData } from "./SidebarData";
import { MdKeyboardArrowRight } from "react-icons/md";
import {HiX} from "react-icons/hi"
import Submenu from "./Submenu";
import User from "../../layout/header/dropdown/user/User";
const Sidebar = ({ isOpen, sidebarClose, showsubmenu, openSubmenu, closeSubmenu }) => {
  const user = localStorage.getItem("accessToken");
  const slydouser = JSON.parse(user);

  return (
    <SidebarOverlay isOpen={isOpen}>
      {showsubmenu ? (
        <Submenu sidebarClose={sidebarClose} showsubmenu={showsubmenu} closeSubmenu={closeSubmenu} />
      ) : (
        <SidebarContainer>
          <SidebarHead>
            <SidebarLogo src={Logo} alt="slydo"></SidebarLogo>
            <HeadRight>
              {slydouser && <User />}
              <CloseDiv onClick={sidebarClose}><HiX/></CloseDiv>
            </HeadRight>
          </SidebarHead>
          <MenuDiv>
            {SideData.map((item, index) => {
              const submenu = item.submenu;
              return (
                <MenuItem onClick={submenu && openSubmenu} key={index}>
                  {item.title} {submenu && <MdKeyboardArrowRight />}{" "}
                </MenuItem>
              );
            })}
          </MenuDiv>
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
      )}
    </SidebarOverlay>
  );
};

export default Sidebar;

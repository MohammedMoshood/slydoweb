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
import { HiX } from "react-icons/hi";
import Submenu from "./Submenu";
import User from "../../layout/header/dropdown/user/User";
import { SubmenuDropdown } from "./UserDropdown";
import { useNavContext } from "../../context/Context";
const Sidebar = () => {
  const user = localStorage.getItem("accessToken");
  const slydouser = JSON.parse(user);

  const { isDropdown, toggleMenuDropdown, isOpen, sidebarClose, showsubmenu, openSubmenu, closeSubmenu } = useNavContext();

  return (
    <SidebarOverlay isOpen={isOpen}>
      {showsubmenu ? (
        <Submenu
          toggleMenuDropdown={toggleMenuDropdown}
          isDropdown={isDropdown}
          sidebarClose={sidebarClose}
          showsubmenu={showsubmenu}
          closeSubmenu={closeSubmenu}
        />
      ) : (
        <SidebarContainer>
          <SidebarHead>
            <SidebarLogo src={Logo} alt="slydo"></SidebarLogo>
            <HeadRight>
              {slydouser && (
                <div
                  onClick={toggleMenuDropdown}
                  style={{ cursor: "pointer", width: "max-content" }}
                  className="user-toggle"
                >
                  <div style={{ width: "35px", height: "35px" }}>
                    <img style={{ height: "100%", width: "100%" }} src={slydouser.user.avatar}></img>
                  </div>
                  <div className="user-info d-none d-md-block">
                    <span className="user-name dropdown-indicator">{slydouser.user.full_name}</span>
                  </div>
                </div>
              )}
              <CloseDiv onClick={sidebarClose}>
                <HiX />
              </CloseDiv>
            </HeadRight>
          </SidebarHead>
          <MenuDiv>
            {SideData.map((item, index) => {
              const submenu = item.submenu;
              return (
                <MenuItem onClick={submenu && openSubmenu} href={item.path && item.path} style={item.style} key={index}>
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
          <SubmenuDropdown isDropdown={isDropdown}></SubmenuDropdown>
        </SidebarContainer>
      )}
    </SidebarOverlay>
  );
};

export default Sidebar;

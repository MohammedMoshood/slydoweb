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
import { HiX } from "react-icons/hi";
import { SubmenuDropdown } from "./UserDropdown";

const Submenu = ({ toggleMenuDropdown , isDropdown, sidebarClose, showsubmenu, closeSubmenu }) => {
  const user = localStorage.getItem("accessToken");
  const slydouser = JSON.parse(user);
  return (
    <SidebarContainer showsubmenu={showsubmenu}>
      <SidebarHead style={{ border: "none", paddingBottom: "10px" }}>
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
      <Fade>
        <SidebarHead style={{ paddingBottom: "10px", paddingLeft: "14px", fontWeight: 500 }}>
          <BackButton onClick={closeSubmenu}>
            <MdKeyboardArrowLeft />
            Back
          </BackButton>
        </SidebarHead>
        <SubmenuDiv>
          {submenuData.map((item, index) => {
            return (
              <SubmenuItem href={item.path} item={item} key={index}>
                <SubmenuIcon> {item.icon} </SubmenuIcon> {item.title}
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
      <SubmenuDropdown isDropdown={isDropdown}></SubmenuDropdown>
    </SidebarContainer>
  );
};

export default Submenu;

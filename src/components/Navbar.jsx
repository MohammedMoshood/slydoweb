import React, { useState } from "react";
import { useNavContext } from "../context/Context";
import Logo from "../images/slydologo.png";
import {
  Nav,
  NavContainer,
  NavLeft,
  SLydoLogo,
  NavCenter,
  NavRight,
  Download,
  NavItem,
  NavLink,
  Arrow,
  MenuDiv,
  MenuBars,
} from "../styles/NavbarElements";
import Navmenu from "./FrontPage/Navmenu";
import { UserDropdown } from "./FrontPage/UserDropdown";
const Navbar = () => {
  const user = localStorage.getItem("accessToken");
  const slydouser = JSON.parse(user);

  const { toggleDropdown, sidebarOpen, openSubnav, closeSubnav, subnav } = useNavContext();
  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <a href="/">
            <SLydoLogo src={Logo} alt="Slydo" />
          </a>
        </NavLeft>
        <NavCenter>
          <div
            onMouseEnter={openSubnav}
            onMouseLeave={closeSubnav}
            style={{ height: "90px", justifyContent: "center", alignItems: "center", display: "flex" }}
          >
            <NavItem>
              <NavLink className="link-btn" to="">
                Features <Arrow />
              </NavLink>
            </NavItem>
          </div>
          <NavItem>
            <NavLink href="/business">Business</NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank" href="https://developer.slydo.co">
              Developers
            </NavLink>
          </NavItem>
        </NavCenter>
        <NavRight>
          {slydouser ? (
            <div
              onClick={toggleDropdown}
              style={{ cursor: "pointer", width: "max-content", gap: "10px" }}
              className="user-toggle"
            >
              <div style={{ width: "35px", height: "35px" }}>
                <img style={{ height: "100%", width: "100%" }} src={slydouser.user.avatar}></img>
              </div>
              <div className="user-info d-none d-md-block">
                <span className="user-name dropdown-indicator">{slydouser.user.full_name}</span>
              </div>
            </div>
          ) : (
            <Download to={`${process.env.PUBLIC_URL}/auth-login`}>Login</Download>
          )}
          <MenuDiv>
            <MenuBars onClick={sidebarOpen}></MenuBars>
          </MenuDiv>
        </NavRight>
      </NavContainer>
      <Navmenu />
      {/* USER DROPDOWN */}
      {slydouser && <UserDropdown></UserDropdown>}
    </Nav>
  );
};

export default Navbar;

import React, { useState } from "react";
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
import FrontPageUser from "../layout/header/dropdown/user/FrontPageUser";

const Navbar = ({ sidebarOpen , openSubnav }) => {
  const user = localStorage.getItem("accessToken");
  const slydouser = JSON.parse(user);


  return (
    <Nav  >
      <NavContainer>
        <NavLeft>
          <SLydoLogo src={Logo} alt="Slydo" />
        </NavLeft>
        <NavCenter>
          <NavItem onMouseEnter={openSubnav} onMouseLeave=
          {openSubnav} >
            <NavLink  className="link-btn" to="">
              Features <Arrow />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="">Business</NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank" href="https://developer.slydo.co">
              Developers
            </NavLink>
          </NavItem>
        </NavCenter>
        <NavRight>
          {slydouser ? <FrontPageUser /> : <Download to={`${process.env.PUBLIC_URL}/auth-login`}>Login</Download>}
          <MenuDiv>
            <MenuBars onClick={sidebarOpen}></MenuBars>
          </MenuDiv>
        </NavRight>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

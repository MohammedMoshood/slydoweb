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
const Navbar = ({ toggleDropdown , sidebarOpen, openSubnav }) => {
  const user = localStorage.getItem("accessToken");
  const slydouser = JSON.parse(user);

  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <SLydoLogo src={Logo} alt="Slydo" />
        </NavLeft>
        <NavCenter>
          <NavItem onMouseEnter={openSubnav} onMouseLeave={openSubnav}>
            <NavLink className="link-btn" to="">
              Features <Arrow />
            </NavLink>
          </NavItem>
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
            <div onClick={toggleDropdown} style={{cursor:"pointer" , width:"max-content" , gap:"10px" }} className="user-toggle">
              <div style={{width:"35px" , height:"35px"}} >
                <img style={{ height: "100%", width: "100%" }} src={slydouser.user.avatar}></img>
              </div>
              <div className="user-info d-none d-md-block" >
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
    </Nav>
  );
};

export default Navbar;

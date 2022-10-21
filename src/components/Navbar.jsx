import React from "react";
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

const Navbar = ({ showModal, toggleModalTrue }) => {
  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <SLydoLogo src={Logo} alt="Slydo" />
        </NavLeft>
        <NavCenter>
          <NavItem>
            <NavLink to="">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="">
              Compare <Arrow />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank" href="https://developer.slydo.co">
              Developers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="">
              Blog <Arrow />
            </NavLink>
          </NavItem>
        </NavCenter>
        <NavRight>
          <Download onClick={toggleModalTrue}>Download App</Download>
          <Download to={`${process.env.PUBLIC_URL}/auth-login`} >Login</Download>
          <MenuDiv>
            <MenuBars />
          </MenuDiv>
        </NavRight>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

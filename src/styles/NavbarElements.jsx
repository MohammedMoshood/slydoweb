import styled from "styled-components";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px;
  width: 100%;
  max-width: 1680px;
  height: 103px;
  background: white;
  @media screen and (max-width: 768px) {
    height: 70px;
    padding: 10px 0;
    position: sticky;
    justify-content: center;
    top: 0;
    z-index: 10;
   
    border-bottom: 0.1px solid #e2e2e2;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  max-width: 1400px;
  width: 84%;
  height: 55px;
  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 400px;
  height: 55px;
`;

export const SLydoLogo = styled.img`
  height: 43px;
  @media screen and (max-width: 768px) {
    height: 30px;
  }
`;

export const NavCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  justify-content: center;
  gap: 16px;
  width: 438px;
  height: 43px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 80px;
  height: 32px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  justify-content: center;

  &:hover {
    background: #f8f8f8;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 13px;
`;
export const Arrow = styled(FaAngleDown)`
  font-size: 10px;
`;

export const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  padding: 0px;
  width: 400px;
  height: 54.99px;
`;

export const MenuDiv = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    border: none;
    cursor: pointer;
    width: 40px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #3f61db;
    border-radius: 15px;

    &:hover {
      background: #94b0dc;
    }
  }
`;
export const MenuBars = styled(FaBars)``;

export const Download = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  cursor: pointer;
  outline: 0;
  width: 110px;
  height: 32px;
  border: none;
  background: #3f61db;
  border-radius: 6px;
  transition: all 0.3s;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 100%;

  &:hover {
    background: #7185a6;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProfileDiv = styled.div`
  width: 60px;
  height: 60px;
  background: #f8f8f8;
`;

export const Goto = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  cursor: pointer;
  outline: 0;
  width: 160px;
  height: 40px;
  background: #3f61db;
  border-radius: 50px;
  transition: all 0.3s;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  &:hover {
    background: #7185a6;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
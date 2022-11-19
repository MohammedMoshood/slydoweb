import styled from "styled-components";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px;
  width: 100%;
  position: relative;
  max-width: 1680px;
  height: 90px;
  background:white;
  justify-content: center;
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
  max-width: 1050px;
  width: 80%;

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
  /* width: 400px; */
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
  /* width: 400px; */
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
  width: 80px;
  height: 32px;
  border: none;
  background: #3f61db;
  border-radius: 20px;
  transition: all 0.3s;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;

  &:hover {
    background: rgba(0, 77, 200, 0.423);
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

//Navigation Submennu

export const NavmenuContainer = styled.aside`
  background: #f1f3f6;
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 550px;
  height: 250px;
  transition: 1s ease-in-out all;
  opacity: ${({ subnav }) => (subnav ? "1" : "0")};
  display: ${({ subnav }) => (subnav ? "grid" : "none")};
  padding: 20px;
  border-radius: 10px;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavmenuLink = styled.a`
  background: white;
  width: 100%;
  border-radius: 10px;
  height: 95px;
  display: flex;
  cursor: pointer;
  padding: 10px;
  gap: 5px;
  justify-content: center;
  &:hover {
    background-color: rgba(59, 61, 190, 0.1);
  }
`;

export const IconDiv = styled.div`
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: flex-start;
`;
export const Icon = styled.img`
  margin-top: 10px;
  justify-self: flex-start;
`;
export const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const LabelTitle = styled.h6`
  font-family: "Inter";
  font-size: 14px;
  color: black;
`;
export const LabelP = styled.p`
  font-family: "Inter";
  margin-top: -5px;
  font-size: 10px;
  color: black;
`;

//Navigation User Dropdown

export const DropdownContainer = styled.aside`
  font-family: "Inter";

  display: ${({ isDropdown }) => (isDropdown ? "flex" : "none")};
  background: #f1f3f6;
  opacity: ${({ isDropdown }) => (isDropdown ? "1" : "0")};
  position: absolute;
  top: 90px;
  flex-direction: column;
  right: 8%;
  z-index: 14;
  width: 294px;
  height: 178px;
  transition: 1s ease-in-out all;
  padding: 20px;
  border-radius: 10px;
  gap: 10px;
  @media screen and (max-width: 768px) {
    top:60px
  }
`;
export const SubDropContainer = styled.aside`
  font-family: "Inter";

  display: ${({ isMenuDropdown }) => (isMenuDropdown ? "flex" : "none")};
  background: #f1f3f6;
  opacity: ${({ isMenuDropdown }) => (isMenuDropdown ? "1" : "0")};
  position: absolute;
  top: 90px;
  flex-direction: column;
  right: 10%;
  z-index: 14;
  width: 294px;
  height: 110px;
  transition: 1s ease-in-out all;
  padding: 20px;
  border-radius: 10px;
  gap: 10px;
`;

export const ItemDiv = styled.a`
  width: 100%;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  background: white;
  display: flex;
  height: 50%;
  padding-left: 10px;
  font-family: "Inter";
  align-items: center;
  &:hover {
    background-color: rgba(59, 61, 190, 0.1);
    color: black;
  }
`;

import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import {FaAngleDown} from "react-icons/fa"

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px;
  width: 100%;
  max-width: 1680px;
  height: 103px;
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
`

export const NavCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  justify-content: center;
  gap: 16px;
  width: 438px;
  height: 43px;
`;
export const NavItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;

width: 80px;
height: 32px;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ;
justify-content:center;

&:hover{
    background: #F8F8F8;
}
`

export const NavLink = styled(LinkRouter)`
text-decoration: none;
color: black;
font-size: 13px;
`
export const Arrow = styled(FaAngleDown)`
   font-size: 10px;
`

export const NavRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  width: 400px;
  height: 54.99px;
`;

export const Download = styled.button`
color: #fff;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 10px;
cursor: pointer;
width: 110px;
height: 32px;
border: none;
background: #3F61DB;
border-radius: 6px;
transition: all 0.3s ;
font-family: "Inter";
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 100%;

&:hover{
    background:#7185a6;
}
`
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarOverlay = styled.aside`
  display: none;
  transition: 0.4s all ease-in-out;

  @media screen and (max-width: 768px) {
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    justify-content: center;
    padding: 20px;
    top: 0;
    z-index: 30;
    width: 100%;
    height: 100%;
    background-color: rgba(57, 57, 57, 0.2);
  }
`;

export const SidebarContainer = styled.div`
  z-index: 35;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ showsubmenu }) => (showsubmenu ? "515px" : "395px")};
  transition: 0.3s all ease-in-out;
  border-radius: 10px;
  background-color: white;
  padding: 20px 10px;
`;

export const SidebarHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(217, 217, 217, 0.3);
`;

export const SidebarLogo = styled.img`
  height: 30px;
`;

export const CloseDiv = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out all;
  font-size: 15px;
  height: 25px;
  outline:none;
  border-radius: 5px;
  color:#4E5A77;
  border: 2px solid #4E5A77;
  cursor: pointer;
  &:hover {
    background: #3f61db;
    color: white;
    border: none;
  }
`;
export const BackButton = styled.div`
  border: none;
  gap: 10px;
  color: #3f61db;
  display: flex;
  font-size: 16px;
  align-items: center;
  outline: none;
  justify-content: left;
  cursor: pointer;
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MenuItem = styled.div`
  font-weight: 500;
  width: 100%;
  font-size: 16px;
  border-bottom: 1px solid rgba(217, 217, 217, 0.3);
  padding: 20px 20px;
  justify-content: space-between;
  cursor: pointer;
  display: flex;
  transition: all 0.3s;
  &:hover {
    color: #3f61db;
  }
`;

export const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #f7f8fa;
  /* height: 60%; */
  padding: 30px 0;
  margin-top: 10px;
  border-radius: 10px; ;
`;

export const LoginButton = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  cursor: pointer;
  outline: 0;
  width: 50%;
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

  @media screen and (max-width: 480px) {
    width: 60%;
  }
`;

export const SubmenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Fade = styled.div`
  background: #f7f8fa;
  border-radius: 10px;
  padding: 10px 0;
  margin-top: 10px;
`;
export const SubmenuItem = styled.div`
  font-weight: 500;
  width: 100%;
  font-size: 16px;
  padding: 20px 0;
  gap: 10px;
  cursor: pointer;
  padding-left: 20px;
  display: flex;
  transition: all 0.3s;
  &:hover {
    color: #3f61db;
  }
`;

export const HeadRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const SubmenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #3f61db;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 100%;
  max-width: 1680px;
  height: 350px;
  border-top: #e8e8e8 solid 1px;
`;

export const FooterContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  max-width: 1190px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
  justify-content: flex-start;
  }
`;
export const MenuWrapper = styled.div`
  gap: 170px;
  height: 85%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
   flex-direction: column;
   gap: 60px;
  }
`;

export const SlydoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 50px;
  @media screen and (max-width: 768px) {
  
  }
`;

export const SlydoImg = styled.img`
  height: 25px;
  object-fit: contain;
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 840px;
  width: 100%;
  height: 100%;
  /* gap: 40px; */
  justify-content: space-between;
`;
export const AboutMenu = styled.div`
  padding: 10px;
  width: 180px;
  height: 100%;
  display: flex;
  list-style: none;
  gap: 25px;
  flex-direction: column;
`;
export const BlogMenu = styled.div`
  padding: 10px;
  width: 180px;
  height: 100%;
  display: flex;
  list-style: none;
  gap: 25px;
  flex-direction: column;
`;
export const WebflowMenu = styled.div`
  padding: 10px;
  width: 180px;
  height: 100%;
  display: flex;
  list-style: none;
  gap: 25px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
   display: none;
  }
`;
export const SocialMenu = styled.ul`
  padding: 10px;
  width: 180px;
  list-style: none;
  gap: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
   display: none;
  }
`;
export const MenuHeader = styled.h5`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: #1a191e;
`;
export const MenuItem = styled.li`
  height: 10px;
  
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 160%;
  color: rgba(26, 25, 30, 0.5);
  transition: 0.3s all;
  &:hover{
    color:#3F61DB;
  }
`;

export const BottomLineDiv = styled.div`
  max-width: 1190px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
   display: none;
  }
`;

export const SlydoInc = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: rgba(26, 25, 30, 0.5);
  cursor: default;
`
export const TandCDiv = styled.div`
gap: 24px;
width: 250px;
display: flex;
    
`
export const TandC = styled(Link)`
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 160%;
  color: rgba(26, 25, 30, 0.5);
  transition: 0.3s all;
  &:hover{
    color:#3F61DB;
  }
    
`
export const PrivacyPolicy = styled(Link)`
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 160%;
  color: rgba(26, 25, 30, 0.5);
  transition: 0.3s all;
  &:hover{
    color:#3F61DB;
  }
    
`
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 100%;
  max-width: 1680px;

  border-top: #e8e8e8 solid 1px;
  @media screen and(max-width: 768px) {
  }
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
  height: 50px;
  object-fit: contain;
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 840px;
  width: 100%;
  flex-wrap: wrap;

  gap: 40px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;
export const AboutMenu = styled.div`
  padding: 10px;
  width: 180px;

  display: flex;
  list-style: none;
  gap: 25px;
  flex-direction: column;
`;
export const BlogMenu = styled.div`
  padding: 10px;
  width: 180px;

  display: flex;
  list-style: none;
  gap: 25px;
  flex-direction: column;
`;
export const WebflowMenu = styled.div`
  padding: 10px;
  width: 180px;

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
  color: rgba(59, 58, 59, 0.5);
  &:hover {
    color: #3f61db;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  color: rgba(59, 58, 59, 0.5);
  font-size: 13px;
  line-height: 160%;
  cursor: pointer;
  transition: 0.3s all;
`;

export const BottomLineDiv = styled.div`
  max-width: 1190px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  border-top: #e8e8e8 solid 2px;
`;

export const SlydoInc = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: rgba(26, 25, 30, 0.5);
  cursor: default;
  @media screen and (max-width: 480px) {
    font-size:8px;
  }
`;
export const TandCDiv = styled.div`
  gap: 24px;
  display: flex;
  @media screen and (max-width: 480px) {
    gap:12px;
  }
`;
export const TandC = styled(Link)`
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 160%;
  color: rgba(26, 25, 30, 0.5);
  transition: 0.3s all;
  &:hover {
    color: #3f61db;
  }
  @media screen and (max-width: 480px) {
    font-size:8px;
  }
`;
export const PrivacyPolicy = styled(Link)`
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 160%;
  color: rgba(26, 25, 30, 0.5);
  transition: 0.3s all;
  &:hover {
    color: #3f61db;
  }
  @media screen and (max-width: 480px) {
    font-size:8px;
  }
`;

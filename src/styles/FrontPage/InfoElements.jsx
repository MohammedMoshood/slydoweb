import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  isolation: isolate;
  max-width: 1680px;
  width: 100%;
  /* padding: 20px 0px; */
  height: 600px;
  justify-content: flex-end;
  background: #e5eafe;
  @media screen and (max-width: 768px) {
    height: 1000px;
    padding-top: 40px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1050px;
  height: 500px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    width: 84%;
  }
`;
export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 1000px;
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 400px;
  }
`;
export const InfoH = styled.h2`
  width: 600px;
  color: #1a191e;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 110%;
  @media screen and (max-width: 768px) {
    line-height: 130%;
    width: 350px;
    font-size: 30px;
    height: 80px;
  }
`;
export const InfoP = styled.p`
  width: 530px;
  height: 108px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 180%;
  color: #1a191e;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    width: 400px;
    font-size: 16px;
    height: 100px;
    word-break: keep-all;
  }
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;
  width: 380px;
  height: 120px;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 120px;
    gap: 15px;
  }
`;
export const SingleInfo = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
`;
export const TickDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 22px;
  border-radius: 12px;
  background-color: #3f61db;
  height: 22px;
  color: #e5eafe;
`;
export const Tick = styled(FaCheck)`
  font-size: 12px;
`;
export const InfoText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const InfoRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;
export const Img = styled.img`
  height: 500px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  @media screen and (max-width: 768px) {
    height: 580px;
  }
`;

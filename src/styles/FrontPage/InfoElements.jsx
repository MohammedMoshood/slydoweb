import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1680px;
  width: 100%;
  height: 600px;
  background: #e5eafe;
  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 30px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  max-width: 1050px;
 align-items: center;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    align-items: baseline;
    flex-direction: column;
    height: 100%;
    width: 84%;
  }
`;
export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;
  max-width: 1000px;
  width: 90%;
  @media screen and (max-width: 768px) {
    justify-content: center;
   
  }
`;
export const InfoH = styled.h2`
 
  color: #1a191e;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 110%;
  @media screen and (max-width: 768px) {
    line-height: 130%;
   
    font-size: 41px;
   
   
  }
`;
export const InfoP = styled.p`
 
 
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 180%;
  color: #1a191e;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 16px;
   
    word-break: keep-all;
  }
  @media screen and (max-width: 480px) {
    height: 120px;
  }
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;
 
 
  @media screen and (max-width: 768px) {
   
   
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
    font-size: 13px;
  }
`;

export const InfoRight = styled.div`
  width: 90%;
  display: flex;
  justify-self: center;
  align-self: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
  padding: 40px 0;

    flex-direction: column;
    justify-content: flex-end;
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
    height: fit-content;
  }
`;
export const Img = styled.img`
  height: 500px; 
  object-fit: contain;
  @media screen and (max-width:850px) {
    height: 480px;
   
  }
  @media screen and (max-width: 768px) {
    height: 700px;
  }
  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;

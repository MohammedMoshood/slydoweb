import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  isolation: isolate;
  max-width: 1680px;
  width: 100%;
  height: 600px;
  justify-content: flex-end;
  background: #e5eafe;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1050px;
  height: 500px;
  
`;
export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 16px;
  width: 560px;
`;
export const InfoH = styled.h2`
  width: 600px;
  color: #1a191e;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 110%;
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
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 22px;
  width: 380px;
  height: 120px;
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
`;

export const InfoRight = styled.div`
 margin-left: 50px ;
`;
export const Img = styled.img`
height: 500px;
border-top-left-radius: 40px;
border-top-right-radius: 40px;
`

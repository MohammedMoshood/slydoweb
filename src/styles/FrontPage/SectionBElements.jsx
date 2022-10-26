import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

export const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1680px;
  padding-top: 60px;
  background: white;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
export const SectionBContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  padding-bottom:0px ;
  justify-content: center;
  align-items: flex-start;
  isolation: isolate;
  width: 80%;

  background: #3f61db;
  border-radius: 20px 20px 0px 0px;
`;
export const SectionBLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  align-self: center;
  gap: 10px;
  width: 70%;
  max-width: 1000px;

  @media screen and (max-width: 1200px) {
    width: 60%;
  }
`;
export const SectionBHeader = styled.h4`
  color: white;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 52px;
  line-height: 110%;
  letter-spacing: -0.03em;
`;
export const SectionBP = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 180%;
  color: white;
`;
export const AppFeatures = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SingleAppFeature = styled.div`
  width: 200px;
  height: 35px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const TickWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 22px;
  border-radius: 15px;
  color: white;
  height: 22px;
  background: rgba(255, 255, 255, 0.2);
`;
export const Check = styled(FaCheck)`
  font-weight: 100;
  font-size: 10px;
`;

export const AppFeatureText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 180%;
  color: white;
`;

export const ButtonDiv = styled.div`
  height: 52px;
  color:white;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  padding: 0px;
  gap: 35px;
  &:hover{
    color:white;
  }
`;
export const Button = styled.a`
  display: flex;
  flex-direction: row;
  color: white;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: "Inter";
  gap: 10px;
  font-size: 9px;
  border: none;
  width: 145px;
  height: 50px;
  background: black;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: all 0.5s;
  text-transform: uppercase;
  &:hover {
    background: #2ace79;
    color: #fff;
  }
`;
export const StoreLinks = styled.p`
  text-transform: none;
  font-family: "Inter";
  font-size: 15px;
`;

export const SectionBRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 90%;
`;

export const CreditImage = styled.img`
  height: 500px;
  object-fit: contain;
`;

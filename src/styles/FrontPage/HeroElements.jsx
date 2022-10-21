import styled from "styled-components";
import { FaApple, FaCheck } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";

export const Hero = styled.div`
  height: 900px;
  width: 100%;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  isolation: isolate;
  background: white;
  @media screen and (max-width: 768px) {
    height: 1200px;
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  max-width: 1050px;
  height: 917px;
  top: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    position: initial;
    width: 84%;
    align-items: flex-start;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1000px;
  width: 100%;
  height: 500px;
  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;
export const HeroH = styled.h2`
  width: 600px;
  height: 280px;
  color: #1a191e;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 52px;
  line-height: 110%;
  @media screen and (max-width: 768px) {
    line-height: 130%;
    width: 350px;
    font-size: 30px;
    height: 180px;
  }
`;
export const HeroP = styled.p`
  width: 600px;
  height: 82px;
  font-style: normal;
  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  line-height: 170%;
  margin-top: -35px;
  color: #1a191e;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    width: 100%;
    font-size: 16px;
    word-break: keep-all;
  }
  @media screen and (max-width: 480px) {
    margin: 10px 0;
  }
`;

export const FeaturesDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  flex-wrap: wrap;
  width: 550px;
  height: 80px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const SingleFeature = styled.div`
  width: 250px;
  height: 35px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 180px;
  }
  @media screen and (max-width: 480px) {
    height: 30px;
  }
`;
export const TickDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px;
  width: 22px;
  border-radius: 15px;
  color: #3f61db;
  height: 22px;
  background: #e5eafe;
`;
export const Tick = styled(FaCheck)`
  font-weight: 100;
  font-size: 10px;
`;
export const FeatureText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 180%;
  color: #1a191e;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 35px;
  margin-top: 40px;
  width: 100%;
  max-width: 1000px;
  height: 52px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    justify-content: center;
  }
`;
export const StoreButton = styled.button`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  font-family: "Inter";
  gap: 10px;
  font-size: 13px;
  border: none;
  width: 135px;
  height: 43px;
  background: #151515;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background: #3f61db;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
    width: 100px;
    height: 35px;
    padding: 8px 4px;
  }
`;

export const Android = styled(ImAndroid)``;
export const Apple = styled(FaApple)``;

export const HeroRight = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    width: 100%;
    place-content: center;
    display: grid;
    height: 800px;
  }
`;

export const PhoneImg = styled.img`
  height: 1000px;
  object-fit: contain;
  @media screen and (max-width: 768px) {
    margin-top: 15px;
    height: 720px;
  }
`;

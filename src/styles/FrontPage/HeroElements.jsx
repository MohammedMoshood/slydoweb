import styled from "styled-components";
import { FaApple, FaCheck } from "react-icons/fa";
import {ImAndroid} from "react-icons/im"

export const Hero = styled.div`
  height: 900px;
  width: 100%;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 0px;
  isolation: isolate;
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: absolute;
  width: 1050px;
  height: 917px;
  top: 100px;
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 600px;
  height: 500px;
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
`;

export const FeaturesDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  flex-wrap: wrap;
  width: 550px;
  height: 80px;
  justify-content: space-between;
`;
export const SingleFeature = styled.div`
  width: 250px;
  height: 35px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
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
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 35px;
margin-top: 40px;
  width: 351px;
  height: 52px;
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
font-size:13px;
border: none;
width: 135px;
height: 43px;
background: #151515;
border-radius: 6px;
cursor: pointer;
transition: all 0.5s ;
&:hover{
    background:  #3f61db;
}

`;

export const Android = styled(ImAndroid)`
    
`
export const Apple = styled(FaApple)`
    
`

export const HeroRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PhoneImg = styled.img`
  height: 750px;
  object-fit: contain;
`;

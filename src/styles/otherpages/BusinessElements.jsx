import styled from "styled-components";

//Business page HeroSection

export const Hero = styled.div`
  width: 100%;
  position: relative;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px;
  background: white;
  @media screen and (max-width: 768px) {
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding-top: 40px;
  max-width: 1050px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding-top: 20px;
    gap: 40px;
  }
`;

export const HeroButton = styled.a`
  text-decoration: none;
  font-weight: 500;
  background-color: #3f61db;
  width: 120px;
  padding: 7px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  transition: 0.2s all;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 12px;
  }
  &:hover {
    background-color: #94b0dc;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;
export const FeaturesDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;
export const SingleFeature = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
  @media screen and (max-width: 480px) {
    width: 150px;
    height: 30px;
  }
`;
export const HeroRight = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

//Business page InfoSection

export const Info = styled.div`
  width: 100%;
  position: relative;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #11243e;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  padding-top: 60px;
  max-width: 1050px;
  gap: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 40px;
    gap: 30px;
  }
`;

export const InfoLeft = styled.div`
  align-self: flex-end;
  @media screen and (max-width: 768px) {
    width: 90%;
    align-self: center;
  }
`;

export const InfoRight = styled.div`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-self: flex-start;
  }
`;
export const TextDiv = styled.div`
  padding: 20px 40px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const InfoText = styled.h2`
  color: white;
  font-weight: 500;
  line-height: 130%;
  font-size: 45px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ImgDiv = styled.div`
  width: 100%;

  margin-top: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//Section B

export const SectionBDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 80px 0;
  max-width: 1050px;
  gap: 50px;
  @media screen and (max-width: 768px) {
    padding: 30px 0 ;
    gap:20px;
  }
`;
export const TopDiv = styled.div`

`;


export const TopText = styled.h4`
color: #1A191E;
font-weight: 500;
@media screen and (max-width:768px) {
  font-size: 16px;
}
`;

export const BottomDiv = styled.div`
display: flex;
justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const SectionLeft = styled.div`
@media screen and (max-width:768px) {
  margin: 0 auto;
}
`;
export const SectionRight = styled.div`
padding-left: 40px;
@media screen and (max-width:768px) {
  padding:0;
}
`;

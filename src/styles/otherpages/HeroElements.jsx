import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  position: relative;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px;
  background: white;
  height: 620px;
  overflow: hidden;
  @media screen and (max-width:768px) {
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding: 40px 0;
  max-width: 1050px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
    gap: 40px;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  gap: 15px;
  margin-top: -50px;
  @media screen and (max-width: 768px) {
gap:10px ;
margin-top: 0;

 }
`;
export const HeroRight = styled.div`
display: flex;
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;
export const HeroText = styled.h2`
  color: #1a191e;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 110%;

  @media screen and (max-width: 1200px) {
    font-size: 41px;
  }
  @media screen and (max-width: 768px) {
    line-height: 130%;
  }
  @media screen and (max-width: 480px) {
    line-height: 130%;

    font-size: 30px;
  }
`;

export const HeroP = styled.p`
  font-style: normal;
  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  line-height: 170%;
  color: #1a191e;
  @media screen and (max-width: 768px) {
    width: 110%;
    font-size: 15px;
    word-break: keep-all;
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
  @media screen and (max-width:768px) {
  margin: 0 auto;
  }
`;

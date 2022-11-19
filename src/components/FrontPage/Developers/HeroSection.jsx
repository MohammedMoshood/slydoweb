import React from "react";
import { HeroContainer, HeroText, HeroP, HeroButton } from "../../../styles/otherpages/HeroElements";
import devImg from "../../../images/developers.svg";
import styled from "styled-components";

const Hero = styled.div`
  width: 100%;
  position: relative;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px;
  background: white;
  height: 500px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 780px;
  }
  @media screen and (max-width: 480px) {
    height: 630px;
  }
`;
const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: black;
  gap: 15px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    gap: 10px;
    margin-top: 0;
    
  }
`;
export const HeroRight = styled.div`
display: flex;
  @media screen and (max-width: 768px) {
    align-self: center;
    margin-top: -50px;
  }
  @media screen and (max-width: 480px) {
    align-self: center;
    margin-top: -100px;
  }
`;

const HeroSection = () => {
  return (
    <Hero>
      <HeroContainer>
        <HeroLeft>
          <HeroText>
            Explore our <br /> guides and examples <br /> to integrate Slydo.
          </HeroText>
          <HeroP>
            Build a web or mobile integration to accept <br /> payments online or in person.
          </HeroP>
          <HeroButton target="_blank" href="https://developer.slydo.co/">
            <p>Get Started</p>
          </HeroButton>
        </HeroLeft>
        <HeroRight>
          <img height={650} style={{ justifySelf: "flex-end" }} src={devImg} alt="Slydo Dev Page"></img>
        </HeroRight>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;

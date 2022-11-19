import React from "react";
import {
  Hero,
  HeroButton,
  HeroContainer,
  HeroLeft,
  HeroP,
  HeroRight,
  HeroText,
} from "../../../styles/otherpages/HeroElements";
import chatImg from "../../../images/chats.svg";

const HeroSection = () => {
  return (
    <Hero  style={{height:"auto" , overflow:"visible"}}>
      <HeroContainer >
        <HeroLeft>
          <HeroText>Bringing people<br/>closer everyday</HeroText>
          <HeroP>
          Chat, Snap, and video call your friends from <br/> wherever you are.
          </HeroP>
          <HeroButton href="">
            <p>Get Started</p>
          </HeroButton>
        </HeroLeft>
        <HeroRight>
          <img width={550} style={{ justifySelf: "flex-end" }} src={chatImg} alt="Slydo Dev Page"></img>
        </HeroRight>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;

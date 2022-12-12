import React, { useState } from "react";
import {
  ContLeft,
  ContRight,
  Hero,
  HeroContainer,
  IconDiv,
  SlideImg,
  SlidesCont,
  SlidesNav,
  Text,
  TopDiv,
} from "../../../styles/otherpages/SocialElements";
import { SlideData } from "./data";
const HeroSection = () => {
  const [value, setValue] = useState(0);
  const { phoneImage, icon, text } = SlideData[value];

  return (
    <Hero>
      <HeroContainer>
        <SlidesCont>
          <ContLeft>
            <TopDiv>socials</TopDiv>
            <Text>{text}</Text>
          </ContLeft>
          <ContRight>
            <SlideImg src={phoneImage} height={700} alt="Socials page slides" />
          </ContRight>
        </SlidesCont>
        <SlidesNav>
          {SlideData.map((item,index) => {
          if (index===value) {
            item.active=true
          } else{
            item.active=false
          }
            return (
              <IconDiv active={item.active} onClick={()=> setValue(index)} >
                {item.icon}
              </IconDiv>
            );
          })}
        </SlidesNav>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;

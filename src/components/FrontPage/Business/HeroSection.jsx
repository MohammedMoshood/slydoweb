import React from "react";
import { HeroButton, FeaturesDiv, Hero, HeroContainer, HeroLeft , SingleFeature , HeroRight } from "../../../styles/otherpages/BusinessElements";
import {  HeroP, HeroText } from "../../../styles/otherpages/HeroElements";
import businessImg from "../../../images/businessImg.gif";
import { FeatureText, Tick, TickDiv } from "../../../styles/FrontPage/HeroElements";



const HeroSection = () => {
  return (
    <Hero>
      <HeroContainer>
        <HeroLeft>
          <HeroText>
            Analyze effortlessly. <br /> Act intentionally.
          </HeroText>
          <HeroP>
            Insights and resources to help improve
            <br /> business productivity and scalability.
          </HeroP>
          <FeaturesDiv style={{display:"grid" , gridTemplateColumns:"1fr 1fr"}}>
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Others</FeatureText>
            </SingleFeature>
            <SingleFeature >
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Services</FeatureText>
            </SingleFeature>
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Products</FeatureText>
            </SingleFeature>
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Invoice and many more</FeatureText>
            </SingleFeature>
          </FeaturesDiv>
          <HeroButton ><p>Get Started</p></HeroButton>
        </HeroLeft>
        <HeroRight>
          <img width={550} style={{ justifySelf: "flex-end" }} src={businessImg} alt="Slydo Dev Page"></img>
        </HeroRight>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;

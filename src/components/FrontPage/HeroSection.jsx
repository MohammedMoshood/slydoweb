import React from "react";
import {
  Hero,
  HeroContainer,
  HeroLeft,
  HeroRight,
  PhoneImg,
  HeroH,
  HeroP,
  FeaturesDiv,
  SingleFeature,
  TickDiv,
  Tick,
  FeatureText,
  ButtonDiv,
  StoreButton,
  Android,
  Apple,
} from "../../styles/FrontPage/HeroElements";
import Img from "../../images/qrcode.png";
const HeroSection = () => {
  return (
    <Hero>
      <HeroContainer>
        <HeroLeft>
          <HeroH>Social media and e-Commerce meets mobile payment.</HeroH>
          <HeroP>
          Slydo is a Social Media, E-commerce, and Mobile Payment app that connects people to their friends and the world.
          </HeroP>
          <FeaturesDiv>
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Photo & Video Sharing</FeatureText>
            </SingleFeature>{" "}
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Digital Storefront</FeatureText>
            </SingleFeature>{" "}
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Secure & Reliable Messaging</FeatureText>
            </SingleFeature>{" "}
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Mobile Payment</FeatureText>
            </SingleFeature>
          </FeaturesDiv>
          <ButtonDiv>
            <StoreButton>
              Play Store <Android />
            </StoreButton>
            <StoreButton>
              App Store <Apple />
            </StoreButton>
          </ButtonDiv>
        </HeroLeft>
        <HeroRight>
          <PhoneImg src={Img} alt="Slydomobile" />
        </HeroRight>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;

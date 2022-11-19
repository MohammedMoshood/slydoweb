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
} from "../../../styles/FrontPage/HeroElements";
import Img from "../../../images/qrcode.gif";
const HeroSection = () => {
  const user = localStorage.getItem("accessToken");
  const slydouser = JSON.parse(user);
  return (
    <Hero>
      <HeroContainer>
        <HeroLeft>
          <HeroH>
            Social Media &amp; <br />
            E-Commerce meets Mobile Payment.
          </HeroH>
          <HeroP>
            Slydo is a social media, e-commerce, and mobile payment app that connects people to their friends and the
            world.
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
            <StoreButton target="_blank" href="https://play.google.com/store/apps/details?id=com.slydo.slydo">
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

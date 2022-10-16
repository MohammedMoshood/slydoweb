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
  ButtonDiv , StoreButton , Android , Apple
} from "../../styles/FrontPage/HeroElements";
import Img from "../../images/qrcode.png";
const HeroSection = () => {
  return (
    <Hero>
      <HeroContainer>
        <HeroLeft>
          <HeroH>
            we are a social technology that <br />
            helps people connect,
            <br />
            and grow businesses.
          </HeroH>
          <HeroP>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt ut labore.
          </HeroP>
          <FeaturesDiv>
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>NFC Payment</FeatureText>
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
              <FeatureText>Social Moments</FeatureText>
            </SingleFeature>
          </FeaturesDiv>
          <ButtonDiv>
            <StoreButton>Play Store <Android/></StoreButton>
            <StoreButton>App Store <Apple/></StoreButton>
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

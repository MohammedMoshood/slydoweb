import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import {
  SectionDiv,
  SectionBContainer,
  SectionBLeft,
  SectionBRight,
  SectionBHeader,
  SectionBP,
  AppFeatures,
  SingleAppFeature,
  TickWrap,
  Check,
  AppFeatureText,
  ButtonDiv,
  Button,
  CreditImage,
  StoreLinks,
} from "../../../styles/FrontPage/SectionBElements";
import Img from "../../../images/CreditImg.png";

const SectionB = () => {
  return (
    <SectionDiv>
      <SectionBContainer>
        <SectionBLeft>
          <SectionBHeader>
            The Financial <br />
            Super App.
          </SectionBHeader>
          <SectionBP>We're taking the pain out of payments, so you can concentrate on the things that matter most to you.</SectionBP>
          <AppFeatures>
            <SingleAppFeature>
              <TickWrap>
                <Check />
              </TickWrap>
              <AppFeatureText>Free Peer 2 Peer Payment</AppFeatureText>
            </SingleAppFeature>
            <SingleAppFeature>
              <TickWrap>
                <Check />
              </TickWrap>
              <AppFeatureText>In-Chat Payment</AppFeatureText>
            </SingleAppFeature>
            <SingleAppFeature>
              <TickWrap>
                <Check />
              </TickWrap>
              <AppFeatureText>QR Code Payment</AppFeatureText>
            </SingleAppFeature>
            <SingleAppFeature>
              <TickWrap>
                <Check />
              </TickWrap>
              <AppFeatureText>Pay User's anonymously</AppFeatureText>
            </SingleAppFeature>
          </AppFeatures>
          <ButtonDiv>
            <Button >
              <FaApple size={24} />
              <div>
                Download on the <br /> <StoreLinks>App Store</StoreLinks>
              </div>
            </Button>
            <Button target="_blank" href="https://play.google.com/store/apps/details?id=com.slydo.slydo">
              <FaGooglePlay size={24} />
              <div>
                GET IT ON <br /> <StoreLinks>Google Play</StoreLinks>
              </div>
            </Button>
          </ButtonDiv>
        </SectionBLeft>
        <SectionBRight>
          <CreditImage src={Img} alt="SlydoApp" />
        </SectionBRight>
      </SectionBContainer>
    </SectionDiv>
  );
};

export default SectionB;

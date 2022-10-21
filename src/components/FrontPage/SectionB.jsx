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
  StoreLinks
} from "../../styles/FrontPage/SectionBElements";
import Img from "../../images/CreditImg.png"

const SectionB = () => {
  return (
    <SectionDiv>
      <SectionBContainer>
        <SectionBLeft>
          <SectionBHeader>
            One app. <br />
            One Lifestyle.
          </SectionBHeader>
          <SectionBP>
            {" "}
            we are africa’s instant messaging, social media, and mobile payment
            app
          </SectionBP>
          <AppFeatures>
            <SingleAppFeature>
              <TickWrap>
                <Check />
              </TickWrap>
              <AppFeatureText>Instant Transactions</AppFeatureText>
            </SingleAppFeature>
            <SingleAppFeature>
              <TickWrap>
                <Check />
              </TickWrap>
              <AppFeatureText>Payments Worldwide</AppFeatureText>
            </SingleAppFeature>
            <SingleAppFeature>
              <TickWrap>
                <Check />
              </TickWrap>
              <AppFeatureText>Saving Accounts</AppFeatureText>
            </SingleAppFeature>
            <SingleAppFeature>
              <TickWrap>
                <Check />
              </TickWrap>
              <AppFeatureText>100% Mobile Banking</AppFeatureText>
            </SingleAppFeature>
          </AppFeatures>
          <ButtonDiv>
            <Button>
              <FaApple size={24} />
              <div>
                Download on the <br /> <StoreLinks>App Store</StoreLinks>
              </div>
            </Button>
            <Button>
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

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
                Download on the <br /> <h2>App Store</h2>
              </div>
            </Button>
            <Button>
              <FaGooglePlay size={24} />
              <div>
                GET IT ON <br /> <h2>Google Play</h2>
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

import React from "react";
import {
  Info,
  InfoContainer,
  InfoLeft,
  InfoRight,
  InfoH,
  InfoP,
  InfoDiv,
  SingleInfo,
  Tick,
  InfoText,
  TickDiv,
  Img,
} from "../../styles/FrontPage/InfoElements";
import PhoneImg from "../../images/MessengerImg.jpg";
const InfoSection = () => {
  return (
    <Info>
      <InfoContainer>
        <InfoLeft>
          <InfoH>
            Share your moments <br /> with the world
          </InfoH>
          <InfoP>
            Share photos and videos on Slydo with friends and family. Capture the moments that matters most to you and
            share privately or with everyone.
          </InfoP>
          <InfoDiv>
            <SingleInfo>
              <TickDiv>
                <Tick></Tick>
              </TickDiv>
              <InfoText>Share your special Moments</InfoText>
            </SingleInfo>
            <SingleInfo>
              <TickDiv>
                <Tick></Tick>
              </TickDiv>
              <InfoText> Connect with your friends and family.

</InfoText>
            </SingleInfo>{" "}
            <SingleInfo>
              <TickDiv>
                <Tick></Tick>
              </TickDiv>
              <InfoText> Get inspired or share your knowledge</InfoText>
            </SingleInfo>
          </InfoDiv>
        </InfoLeft>
        <InfoRight>
          <Img src={PhoneImg} alt="SlydoApp"></Img>
        </InfoRight>
      </InfoContainer>
    </Info>
  );
};

export default InfoSection;

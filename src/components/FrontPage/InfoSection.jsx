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
  TickDiv, Img
} from "../../styles/FrontPage/InfoElements";
import PhoneImg from "../../images/MessengerImg.jpg"
const InfoSection = () => {
  return (
    <Info>
      <InfoContainer>
        <InfoLeft>
          <InfoH>
            Share moments <br />
            that matter
          </InfoH>
          <InfoP>
            Send photos and videos on Slydo instantly. You can even <br />{" "}
            capture the moments that matter to yo the most with a built-in
            camera
          </InfoP>
          <InfoDiv>
            <SingleInfo>
              <TickDiv>
                <Tick></Tick>
              </TickDiv>
              <InfoText>in-app chat payment</InfoText>
            </SingleInfo>
            <SingleInfo>
              <TickDiv>
                <Tick></Tick>
              </TickDiv>
              <InfoText> media file sharing of photos and videos</InfoText>
            </SingleInfo>{" "}
            <SingleInfo>
              <TickDiv>
                <Tick></Tick>
              </TickDiv>
              <InfoText> product purchase via chat</InfoText>
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

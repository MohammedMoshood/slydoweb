import React from "react";
import {
    ImgDiv,
  Info,
  InfoContainer,
  InfoLeft,
  InfoRight,
  InfoText,
  TextDiv,
} from "../../../styles/otherpages/BusinessElements";
import PhoneImg from "../../../images/businesspageicons/PhoneImg.png";
import LaptopImg from "../../../images/businesspageicons/LaptopImg.png"

const InfoSection = () => {
  return (
    <Info>
      <InfoContainer>
        <InfoLeft>
          <img style={{objectFit:"contain"}} src={PhoneImg} alt="Slydo" />
        </InfoLeft>
        <InfoRight>
          <TextDiv>
            <InfoText>
              Monitor transactions,
              <br /> and free access to <br /> product & service listing
            </InfoText>
          </TextDiv>
          <ImgDiv>
            <img   src={LaptopImg} alt="Dashboard" />
          </ImgDiv>
        </InfoRight>
      </InfoContainer>
    </Info>
  );
};

export default InfoSection;

import React from "react";
import {
  CardContainer,
  CardTopline,
  Info,
  InfoContainer,
  InfoHead,
  SingleCardDiv,
  IconDiv,
  CardP,
} from "../../../styles/otherpages/InfoElements";
import { carddata } from "./InfoCardData";

const InfoSection = () => {
  return (
    <Info>
      <InfoContainer>
        <InfoHead>Learn about Slydo Docs</InfoHead>
        <CardContainer>
          {carddata.map((item) => {
            return (
              <SingleCardDiv>
                <IconDiv>
                  {item.icon}
                </IconDiv>
                <CardTopline>{item.title}</CardTopline>
                <CardP>{item.text}</CardP>
              </SingleCardDiv>
            );
          })}
        </CardContainer>
      </InfoContainer>
    </Info>
  );
};

export default InfoSection;

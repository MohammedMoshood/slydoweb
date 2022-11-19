import React from "react";
import {
  Info,
  CardB,
  InfoContainer,
  InfoHead,
  MultiContainer,
  SingleDiv,
  CardTopline,
  CardP,
} from "../../../styles/otherpages/InfoElements";
import { Cardbdata } from "./InfoCardData";

const InfoSectionB = () => {
  return (
    <Info style={{ backgroundColor: "white" }}>
      <InfoContainer>
        <InfoHead>Recommended Integrations</InfoHead>
        <MultiContainer>
          {Cardbdata.map((item) => {
            return (
              <SingleDiv>
                <CardB></CardB>
                <CardTopline style={{ color: "#3F61DB" }}>{item.title}</CardTopline>
                <CardP>{item.text}</CardP>
              </SingleDiv>
            );
          })}
        </MultiContainer>
      </InfoContainer>
    </Info>
  );
};

export default InfoSectionB;

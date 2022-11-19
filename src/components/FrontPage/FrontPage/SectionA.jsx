import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  Savings,
  SavingsContainer,
  TextContainer,
  TopLine,
  SavingsH,
  SavingsP,
  CardWrapper,
  AllDiv,
  AllFeatures,
} from "../../../styles/FrontPage/SectionAElements";
import { card1, card2, card3, card4, card5 } from "./CardData";
import SavingsCard from "./SavingsCard";

const SectionA = () => {
  return (
    <Savings>
      <SavingsContainer>
        <TextContainer>
          <TopLine>The Slydo lifestyle</TopLine>
          <SavingsH>More than just a payment app.</SavingsH>
          <SavingsP>
            For instant messaging, social media, e-commerce, and mobile payment. Designed to give you the optimal social
            experience 😊.
          </SavingsP>
        </TextContainer>
        <AllDiv>
          <AllFeatures>
            All Features <FaArrowRight />
          </AllFeatures>
        </AllDiv>
        <CardWrapper>
          <SavingsCard {...card1}></SavingsCard>
          <SavingsCard {...card2}></SavingsCard>
          <SavingsCard {...card3}></SavingsCard>
          <SavingsCard {...card4}></SavingsCard>
          <SavingsCard {...card5}></SavingsCard>
        </CardWrapper>
      </SavingsContainer>
    </Savings>
  );
};

export default SectionA;

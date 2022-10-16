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
  AllDiv , AllFeatures , 
} from "../../styles/FrontPage/SectionAElements";
import { card1, card2, card3, card4, card5 } from "./CardData";
import SavingsCard from "./SavingsCard";

const SectionA = () => {
  return (
    <Savings>
      <SavingsContainer>
        <TextContainer>
          <TopLine>Saving Accounts</TopLine>
          <SavingsH>Do more with Slydo</SavingsH>
          <SavingsP>
            Slydo values you and puts your needs first. Designed to give you
            a social experience that makes your everyday needs a priority 😊.
          </SavingsP>
        </TextContainer>
        <AllDiv>
            <AllFeatures>All Features <FaArrowRight/></AllFeatures>
        </AllDiv>
        <CardWrapper>
            <SavingsCard {...card1} ></SavingsCard>
            <SavingsCard {...card2}></SavingsCard>
            <SavingsCard {...card3} ></SavingsCard>
            <SavingsCard {...card4}></SavingsCard>
            <SavingsCard {...card5} ></SavingsCard>
        </CardWrapper>
      </SavingsContainer>
    </Savings>
  );
};

export default SectionA;

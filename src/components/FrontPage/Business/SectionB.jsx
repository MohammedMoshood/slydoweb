import React from "react";
import {
  BottomDiv,
  FeaturesDiv,
  Info,
  SectionBDiv,
  SectionLeft,
  SectionRight,
  SingleFeature,
  TopDiv,
  TopText,
} from "../../../styles/otherpages/BusinessElements";
import Smile from "../../../images/businesspageicons/Smile.svg";
import { HeroP, HeroText } from "../../../styles/otherpages/HeroElements";
import { FeatureText, Tick, TickDiv } from "../../../styles/FrontPage/HeroElements";
const SectionB = () => {
  return (
    <Info style={{ background: "white" }}>
      <SectionBDiv>
        <TopDiv>
          <TopText>Built for vendors and entrepreneurs</TopText>
        </TopDiv>
        <BottomDiv>
          <SectionLeft>
            <img src={Smile} alt="Slydo" />
          </SectionLeft>
          <SectionRight>
            <HeroText>
              Integrated payment <br /> both offline and online
            </HeroText>
            <HeroP>
              Drive performance and cross-functional <br /> collaboration with easy-to-use dashboards, data 
              visualizations, automated insights.
            </HeroP>
            <FeaturesDiv style={{display:"grid" , gridTemplateColumns:"1fr 1fr"}}>
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Enhance Visibility</FeatureText>
            </SingleFeature>
            <SingleFeature >
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Increased Speed</FeatureText>
            </SingleFeature>
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Products</FeatureText>
            </SingleFeature>
            <SingleFeature>
              <TickDiv>
                <Tick />
              </TickDiv>
              <FeatureText>Built-in Trust</FeatureText>
            </SingleFeature>
          </FeaturesDiv>
          </SectionRight>
        </BottomDiv>
      </SectionBDiv>
    </Info>
  );
};

export default SectionB;

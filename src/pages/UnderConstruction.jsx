import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/FrontPage/FrontPage/Sidebar";
import Navbar from "../components/Navbar";

import ErrorImage from "../images/UnderConstruct.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1020px) {
    width: 100%;
    justify-content: center;
  }
`;
const LeftDiv = styled.div`
  width: 50%;
  margin-bottom: 100px;
  @media screen and (max-width: 1020px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
  }
`;
const FeatureDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (max-width: 1020px) {
    justify-content: center;
  }
`;

const Text = styled.h2`
  margin-top: 40px;
  font-size: 50px;
  font-weight: 500;
  color: #1A191E;
  @media screen and (max-width: 1020px) {
    font-size: 30px;
  }
`;

const Image = styled.img`
  width: 90%;
  @media screen and (max-width: 1020px) {
    width: 80%;
  }
`;

const TopDiv = styled.div`
  gap: 20px;
  display: flex;
`;
const BottomDiv = styled.div`
  gap: 20px;
  display: flex;
  @media screen and (max-width: 1020px) {
    width: 70%;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const SingleFeature = styled.div`
  padding: 15px;
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  @media screen and (max-width: 480px) {
    padding:10px ;
    height: 30px;
  }
`;
const FeatureText = styled.p`
  font-family: "Inter";
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
  
`;

const ConstructionDiv = styled.div`
  width: 84%;
  max-width: 1050px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 50px;
  @media screen and (max-width: 1020px) {
    flex-direction: column;
  justify-content: center;
    align-items: center;

  }
`;
const UnderConstruction = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <div
        style={{
          width: "100%",
          maxWidth: "1680px",
          background: "white",
          display: "flex",
          height: "fit-content",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <ConstructionDiv >
          <LeftDiv>
            <FeatureDiv>
              <TopDiv>
                <SingleFeature style={{ backgroundColor: " rgba(255, 200, 188, 0.5)", color: "rgba(220, 65, 31, 1)" }}>
                  <FeatureText>
                    <i>socials</i>
                  </FeatureText>
                </SingleFeature>
                <SingleFeature style={{ backgroundColor: "rgba(184, 198, 255, 0.5)", color: "rgba(58, 96, 248, 1)" }}>
                  <FeatureText>
                    <i>payment</i>
                  </FeatureText>
                </SingleFeature>
                <SingleFeature style={{ backgroundColor: "rgba(232, 182, 255, 0.5)", color: "rgba(167, 23, 235, 1)" }}>
                  <FeatureText>
                    <i>business</i>
                  </FeatureText>
                </SingleFeature>
                <SingleFeature style={{ backgroundColor: "rgba(243, 175, 208, 0.5)", color: "rgba(223, 48, 132, 1)" }}>
                  <FeatureText>
                    <i>developers</i>
                  </FeatureText>
                </SingleFeature>
              </TopDiv>
              <BottomDiv>
                <SingleFeature style={{ backgroundColor: "rgba(180, 255, 216, 0.5)", color: "rgba(16, 168, 89, 1)" }}>
                  <FeatureText>
                    <i>chat</i>
                  </FeatureText>
                </SingleFeature>
                <SingleFeature style={{ backgroundColor: "rgba(243, 175, 208, 0.5)", color: "rgba(223, 48, 132, 1)" }}>
                  <FeatureText>
                    <i>moments</i>
                  </FeatureText>
                </SingleFeature>
                <SingleFeature style={{ backgroundColor: "rgba(180, 255, 216, 0.5)", color: "rgba(16, 168, 89, 1)" }}>
                  <FeatureText>
                    <i>commerce</i>
                  </FeatureText>
                </SingleFeature>
                <SingleFeature style={{ backgroundColor: "rgba(198, 210, 255, 0.5)", color: "rgba(63, 97, 219, 1)" }}>
                  <FeatureText>money</FeatureText>
                </SingleFeature>
                <SingleFeature style={{ backgroundColor: "rgba(223, 223, 226, 0.5)", color: "rgba(21, 21, 21, 1)" }}>
                  <FeatureText>mobile</FeatureText>
                </SingleFeature>
                <SingleFeature style={{ backgroundColor: "rgba(255, 224, 180, 0.5)", color: "rgba(206, 123, 0, 1)" }}>
                  <FeatureText>digital</FeatureText>
                </SingleFeature>
              </BottomDiv>
            </FeatureDiv>
            <Text>
              We are creating <br /> an amazing experience, <br /> coming soon.
            </Text>
          </LeftDiv>
          <RightDiv>
            <Image src={ErrorImage} alt="construction"></Image>
          </RightDiv>
        </ConstructionDiv>
      </div>
      <Footer />
    </div>
  );
};
export default UnderConstruction;

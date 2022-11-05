import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/FrontPage/Sidebar";
import Navbar from "../components/Navbar";

import ErrorImage from "../images/UnderConstruct.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TextDiv = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
const Text = styled.h3`
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const Button = styled.button`
  background: #3f61db;
  padding: 5px;
  width: 150px;
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
  margin-top: 20px;
  transition: 0.2s all;
  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 12px;
  }
  &:hover {
    background: #6a85e6;
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: white;
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
          padding: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "84%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <img src={ErrorImage} alt="construction"></img>
          <TextDiv>
            <Text>We are working an creating amazing experience just for you. Please check back later.</Text>
            <Button>
              <ButtonLink href="/" rel="noreferrer"> Back to Home</ButtonLink>
            </Button>
          </TextDiv>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default UnderConstruction;

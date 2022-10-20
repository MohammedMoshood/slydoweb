import styled from "styled-components";

export const Savings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-width: 1680px;
  width: 100%;
  height: 600px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const SavingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  max-width: 1050px;
  height: 550px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  width: 1050px;
  padding: 30px;
  gap: 16px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;
export const TopLine = styled.h5`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 120%;
  letter-spacing: -0.03em;
  color: #1a191e;
`;
export const SavingsH = styled.h4`
  color: #1a191e;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.03em;
  font-size: 50px;
  line-height: 110%;
`;
export const SavingsP = styled.p`
  width: 500px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 180%;
  color: #1a191e;
  @media screen and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const AllDiv = styled.div`
  padding: 20px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 60px;
  }
`;
export const AllFeatures = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: none;
  border: none;
  width: 110px;
  height: 30px;
  color: #3f61db;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  letter-spacing: -0.03em;
  transition: all 0.3s;
  &:hover {
    background-color: #e5eafe;
  }
`;
export const CardWrapper = styled.div`
  height: 260px;
  width: 100%;
  max-width: 1050px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  gap: 15px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    gap: 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  height: 220px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  width: 180px;
  cursor: pointer;
  border-radius: 15px;
  height: 180px;
  transition: 0.3s all;

  &:hover {
    width: 160px;
    height: 160px;
  }
`;
export const CardText = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.03em;
  color: #1a191e;
`;

import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

export const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1680px;
  height: 550px;
`;
export const SectionBContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  align-items: flex-start;
  isolation: isolate;
  width: 1010px;
  height: 460px;
  background: #3f61db;
  border-radius: 20px 20px 0px 0px;
`;
export const SectionBLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
  width: 500px;
  height: 420px;
`;
export const SectionBHeader = styled.h4`
  width: 600px;
  height: 130px;
  color: white;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 52px;
  line-height: 110%;
  letter-spacing: -0.03em;
`;
export const SectionBP = styled.p`
  width: 450px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 180%;
  color: white;
`;
export const AppFeatures = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: 40px; */
  flex-wrap: wrap;
  width: 400px;
  height: 80px;
  justify-content: space-between;
`;

export const SingleAppFeature = styled.div`
  width: 200px;
  height: 35px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const TickWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 22px;
  border-radius: 15px;
  color: white;
  height: 22px;
  background: rgba(255, 255, 255, 0.2);
`;
export const Check = styled(FaCheck)`
  font-weight: 100;
  font-size: 10px;
`;

export const AppFeatureText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 180%;
  color: white;
`;

export const ButtonDiv = styled.div`
  height: 52px;
  width: 351px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  padding: 0px;
  gap: 35px;
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: "Inter";
  gap: 10px;
  font-size: 10px;
  border: none;
  width: 145px;
  height: 50px;
  background: black;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: all 0.5s;
  &:hover {
    background: #2ACE79;
  }
`;

export const SectionBRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CreditImage = styled.img`
  height: 420px;
  object-fit: contain;
  border-radius: 45px 45px 0px 0px ;
`;

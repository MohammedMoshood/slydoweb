import styled from "styled-components";

export const Info = styled.div`
  width: 100%;
  position: relative;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfcfc; ;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 60px 0;
  max-width: 1050px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0;
    gap: 10px;
  }
`;

export const InfoHead = styled.h4`
  color: #1a191e;
`;

export const CardContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 33px;
  @media screen and (max-width:768px) {
    padding: 20px 0;
  }
  
`;
export const SingleCardDiv = styled.div`
  width: 31%;
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 25px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const IconDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e5eafe;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
export const CardTopline = styled.p`
  color: black;
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px;
`;
export const CardP = styled.p`
  color: black;
  margin-top: -10px;
`;

//InfoSection B

export const MultiContainer = styled.div`
  padding: 40px 0;
  flex-direction: row;
  display: flex;
  gap: 33px;
  flex-wrap: wrap;
`;

export const SingleDiv = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:768px) {
    width: 100%;
  }
`;

export const CardB = styled.div`
  padding: 90px 0;
  background-color: #f5f6f8;
  border-radius: 10px;
  @media screen and (max-width:768px) {
    
  }
`;

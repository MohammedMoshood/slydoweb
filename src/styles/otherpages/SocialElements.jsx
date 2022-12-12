import styled from "styled-components"

export const Hero = styled.div`
  width: 100%;
  position: relative;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px;
  background: rgb(255, 255, 255);
  @media screen and (max-width:768px) {
  }
`;
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 40px 0;
       max-width: 1050px;
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 20px 0;
    gap: 40px;
  }
`;


export const SlidesCont = styled.div`
    display: flex;
    align-items: center;
   gap: 50px;
   max-width: 1000px;
   @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

export const ContLeft = styled.div`
display: flex;
flex-direction: column;
gap:20px;
 width: 100%;
 @media screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
`

export const TopDiv = styled.div`
width: 80px;
background: #585D70;
color: white;
height: 30px;
display: grid;
place-items: center;
border-radius: 20px;
`
export const Text = styled.h2`
color: #1a191e;
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 58px;
  line-height: 110%;
  

  @media screen and (max-width: 1400px) {
    font-size: 41px;
  }
  @media screen and (max-width: 768px) {
    line-height: 130%;
  }
  @media screen and (max-width: 480px) {
    line-height: 130%;

    font-size: 30px;
  }
`

export const ContRight = styled.div`
width: 100%;
@media screen and (max-width: 1000px) {
    text-align: center;
  }
`
export const SlideImg = styled.img`

`



export const SlidesNav = styled.div`
width: 50px;
display:flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
gap: 30px;

@media screen and (max-width:1000px) {
    flex-direction: row;
    gap: 5%;
    align-items: center;
    width: 100%;
}

`

export const IconDiv = styled.div`
    height: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 50px;
    color: ${({active})=> active? "#3F61DB" : "#9A9A9A"} ;
    background:  ${({active})=> active? "#E5EAFE" : "#F5F6F6"} ;
    font-size: 17px;
    transform:  ${({active})=> active ? "scale(1.2)" : "scale(1)"} ;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
        color: #3F61DB;
        background-color: #E5EAFE;
    }
`

export const Icon = styled.img`
    
`
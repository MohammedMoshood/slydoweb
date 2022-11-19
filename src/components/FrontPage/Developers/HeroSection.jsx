import React from 'react'
import { Hero, HeroContainer, HeroLeft, HeroRight, HeroText , HeroP, HeroButton } from '../../../styles/otherpages/HeroElements'
import devImg from "../../../images/developers.svg"
const HeroSection = () => {
  return (
    <Hero>
      <HeroContainer>
        <HeroLeft>
            <HeroText>
              Explore our <br/> guides and examples <br/> to integrate Slydo.
            </HeroText>
            <HeroP>
            Build a web or mobile integration to accept <br/> payments online or in person.
            </HeroP>
            <HeroButton 
            target='_blank' href='https://developer.slydo.co/'>
             <p>Get Started</p> 
            </HeroButton>
        </HeroLeft>
        <HeroRight>
          <img width={550} style={{justifySelf:'flex-end'}} src={devImg} alt="Slydo Dev Page" ></img>
        </HeroRight>
      </HeroContainer>
    </Hero>
  )
}

export default HeroSection
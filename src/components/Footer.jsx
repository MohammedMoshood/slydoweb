import React from "react";
import {
  AboutMenu,
  BlogMenu,
  BottomLineDiv,
  FooterContainer,
  FooterSection,
  MenuDiv,
  MenuHeader,
  MenuItem,
  MenuLink,
  MenuWrapper,
  SlydoDiv,
  SlydoImg,
  SocialMenu,
  WebflowMenu,
  SlydoInc,
  TandCDiv,
  TandC,
  PrivacyPolicy,
} from "../styles/FooterElements";
import Img from "../images/slydologo.png";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <MenuWrapper>
          <SlydoDiv>
            <SlydoImg src={Img} alt="slydo"></SlydoImg>
          </SlydoDiv>
          <MenuDiv>
            <AboutMenu>
              <MenuHeader> About</MenuHeader>
              <MenuItem>
                <MenuLink  href="#">Features</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="#">Pricing</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="#">Support</MenuLink>
              </MenuItem>
            </AboutMenu>

            <BlogMenu>
              <MenuHeader>Blog</MenuHeader>
              <MenuItem>
                <MenuLink  href="#">Product</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="#">Services</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="#">Technology</MenuLink>
              </MenuItem>
            </BlogMenu>

            <WebflowMenu>
              <MenuHeader>Business</MenuHeader>
              <MenuItem>
                <MenuLink  href="#">Contract</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="#">Invoice</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="#">Payment</MenuLink>
              </MenuItem>
            </WebflowMenu>

            <SocialMenu>
              <MenuHeader>Social Media</MenuHeader>
              <MenuItem>
                <MenuLink target="_blank" href="https://twitter.com/Slydoapp">Twitter</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink target="_blank" href="https://www.facebook.com/slydoapp">Facebook</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink target="_blank" href="https://www.instagram.com/slydoapp">Instagram</MenuLink>
              </MenuItem>
            </SocialMenu>
          </MenuDiv>
        </MenuWrapper>
        <BottomLineDiv>
          <SlydoInc>@ 2022 Slydo inc.</SlydoInc>
          <TandCDiv>
            <TandC to="">Terms and Conditions</TandC>
            <PrivacyPolicy to="">Privacy Policy</PrivacyPolicy>
          </TandCDiv>
        </BottomLineDiv>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;

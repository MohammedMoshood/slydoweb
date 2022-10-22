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
import Img from "../images/Slydotext.png";

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
                <MenuLink to="">Features</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="">Pricing</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="">Support</MenuLink>
              </MenuItem>
            </AboutMenu>

            <BlogMenu>
              <MenuHeader>Blog</MenuHeader>
              <MenuItem>
                <MenuLink to="">Product</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="">Services</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="">Technology</MenuLink>
              </MenuItem>
            </BlogMenu>

            <WebflowMenu>
              <MenuHeader>Webflow</MenuHeader>
              <MenuItem>
                <MenuLink to="">Styleguide</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="">Licensing</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="">Changelog</MenuLink>
              </MenuItem>
            </WebflowMenu>

            <SocialMenu>
              <MenuHeader>Social Media</MenuHeader>
              <MenuItem>
                <MenuLink to="">Twitter</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="">Facebook</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="">Instagram</MenuLink>
              </MenuItem>
            </SocialMenu>
          </MenuDiv>
        </MenuWrapper>
        <BottomLineDiv>
          <SlydoInc>@ 2022 slydo inc.</SlydoInc>
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

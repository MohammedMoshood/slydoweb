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
                <MenuLink  href="/features">Features</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="/pricing">Pricing</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="/support">Support</MenuLink>
              </MenuItem>
            </AboutMenu>

            <BlogMenu>
              <MenuHeader>Blog</MenuHeader>
              <MenuItem>
                <MenuLink  href="/product">Product</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="/our-services">Services</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="/technology">Technology</MenuLink>
              </MenuItem>
            </BlogMenu>

            <WebflowMenu>
              <MenuHeader>Business</MenuHeader>
              <MenuItem>
                <MenuLink  href="/contract">Contract</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="/slydo-invoice">Invoice</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink  href="/payment">Payment</MenuLink>
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
            <TandC to="/termsandconditions">Terms and Conditions</TandC>
            <PrivacyPolicy to="/privacypolicy">Privacy Policy</PrivacyPolicy>
          </TandCDiv>
        </BottomLineDiv>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;

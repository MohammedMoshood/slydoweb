import React, { useRef, useEffect } from "react";
import {
  NavmenuContainer,
  NavmenuLink,
  IconDiv,
  Icon,
  LabelDiv,
  LabelTitle,
  LabelP,
} from "../../styles/NavbarElements";
import icon1 from "../../images/submenuicons/icon1.png";
import icon2 from "../../images/submenuicons/icon2.png";
import icon3 from "../../images/submenuicons/icon3.png";
import icon4 from "../../images/submenuicons/icon4.png";
import { useNavContext } from "../../context/Context";

const Navmenu = () => {
  const { openSubnav , closeSubnav, subnav } = useNavContext()
  return (
    <NavmenuContainer onMouseEnter={openSubnav} onMouseLeave={closeSubnav} subnav={subnav}>
      <NavmenuLink href="/chat">
        <IconDiv>
          <Icon style={{height:"20px"}} src={icon1}></Icon>
        </IconDiv>
        <LabelDiv>
          <LabelTitle>Chat</LabelTitle>
          <LabelP>Perfect messaging app for personal, group, and business communication</LabelP>
        </LabelDiv>
      </NavmenuLink>{" "}
      <NavmenuLink href="/business" >
        <IconDiv>
          <Icon style={{height:"20px"}} src={icon2}></Icon>
        </IconDiv>
        <LabelDiv>
          <LabelTitle>Business</LabelTitle>
          <LabelP>Set up your store, add products, chat with customers, and accept payments.</LabelP>
        </LabelDiv>
      </NavmenuLink>{" "}
      <NavmenuLink href="/socials" >
        <IconDiv>
          <Icon style={{height:"20px"}} src={icon3}></Icon>
        </IconDiv>
        <LabelDiv>
          <LabelTitle>Socials</LabelTitle>
          <LabelP>Share photos and videos on Slydo with friends and family.</LabelP>
        </LabelDiv>
      </NavmenuLink>{" "}
      <NavmenuLink target="_blank" href="https://developer.slydo.co">
        <IconDiv>
          <Icon style={{height:"20px"}} src={icon4}></Icon>
        </IconDiv>
        <LabelDiv>
          <LabelTitle>Developers</LabelTitle>
          <LabelP>Build a web or mobile integration to accept payments online or in person.</LabelP>
        </LabelDiv>
      </NavmenuLink>
    </NavmenuContainer>
  );
};

export default Navmenu;

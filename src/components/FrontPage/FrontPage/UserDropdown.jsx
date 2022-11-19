import React from "react";
import { useNavContext } from "../../../context/Context";
import { DropdownContainer, ItemDiv, SubDropContainer } from "../../../styles/NavbarElements";
import { Icon } from "../../Component";
const user = localStorage.getItem("accessToken");
const slydouser = JSON.parse(user);
const handleSignout = () => {
  localStorage.removeItem("accessToken");
};

export const UserDropdown = () => {
  const { isDropdown } = useNavContext();
  return (
    <DropdownContainer isDropdown={isDropdown}>
      <ItemDiv href={`${process.env.PUBLIC_URL}/dashboard`} style={{ cursor: "pointer" }}>
        <div className="user-card sm">
          <div style={{ width: "35px", height: "35px" }} className="user-avatar">
            <img style={{ height: "100%", width: "100%" }} src={slydouser.user.avatar} alt="" />
          </div>
          <div className="user-info">
            <span className="lead-text">{slydouser.user.full_name}</span>
            <span className="sub-text">@{slydouser.user.username}</span>
          </div>
        </div>
      </ItemDiv>
      <ItemDiv style={{ gap: "10px" }} href={`${process.env.PUBLIC_URL}/auth-login`} onClick={handleSignout}>
        <Icon style={{ fontSize: "24px" }} name="signout"></Icon>
        <span>Sign Out</span>
      </ItemDiv>
    </DropdownContainer>
  );
};

export const SubmenuDropdown = () => {
  const { isMenuDropdown } = useNavContext();
  return (
    <SubDropContainer isMenuDropdown={isMenuDropdown}>
      <ItemDiv
        style={{ gap: "10px", height: "100%" }}
        href={`${process.env.PUBLIC_URL}/auth-login`}
        onClick={handleSignout}
      >
        <Icon style={{ fontSize: "24px" }} name="signout"></Icon>
        <span>Sign Out</span>
      </ItemDiv>
    </SubDropContainer>
  );
};

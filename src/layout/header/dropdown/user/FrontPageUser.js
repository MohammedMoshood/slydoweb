import React, { useState } from "react";
import axios from 'axios';
import { DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import { Icon } from "../../../../components/Component";
import { LinkList, LinkItem } from "../../../../components/links/Links";
import UserAvatar from "../../../../components/user/UserAvatar";

const FrontPageUser = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prevState) => !prevState);

  // const user=localStorage.getItem("data");
  // const user = JSON.parse(localStorage.getItem("accessToken"));
  // const { data } = await axios.get(
  //   `${process.env.REACT_APP_BASE_URL}/api/v1/user/auth/get-token/`,
  //   // payload
  //   { 'phone_number': formData.name, 'password': formData.passcode },
  // );
  // const { data } = await axios.get(
  //   `${process.env.REACT_APP_BASE_URL}/api/v1/user/auth/get-token/`,
  // );
  // if (data.access) {
  //   localStorage.getItem("accessToken", data);
  // }
  const user = localStorage.getItem('accessToken');
  const slydouser = JSON.parse(user);
  // console.log(user);

  const handleSignout = () => {
    localStorage.removeItem("accessToken");
  };

  return (
    <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#toggle"
        className="dropdown-toggle"
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <div className="user-toggle">
          {/* <UserAvatar icon="user-alt" className="sm" /> */}
          <UserAvatar className="sm" >
            <img style={{height: '100%', width: '100%'}} src={slydouser.user.avatar}  alt="" />
          </UserAvatar>
          
          <div className="user-info d-none d-md-block">
            {/* <div className="user-status">Administrator</div> */}
            <div className="user-name dropdown-indicator">{slydouser.user.full_name}</div>
          </div>
        </div>
      </DropdownToggle>
      <DropdownMenu  right className="dropdown-menu-md dropdown-menu-s1">
        <a href={`${process.env.PUBLIC_URL}/dashboard`}  className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
          <div className="user-card sm">
            <div className="user-avatar">
              {/* <span>T.E</span> */}
              <img style={{height: '100%', width: '100%'}} src={slydouser.user.avatar} alt="" />
            </div>
            <div className="user-info">
              <span className="lead-text">{slydouser.user.full_name}</span>
              <span className="sub-text">@{slydouser.user.username}</span>
            </div>
          </div>
        </a>
        {/* <div className="dropdown-inner">
          <LinkList>
            <LinkItem link="/user-profile-regular" icon="user-alt" onClick={toggle}>
              View Profile
            </LinkItem>
            <LinkItem link="/user-profile-setting" icon="setting-alt" onClick={toggle}>
              Account Setting
            </LinkItem>
            <LinkItem link="/user-profile-activity" icon="activity-alt" onClick={toggle}>
              Login Activity
            </LinkItem>
          </LinkList>
        </div> */}
        <div className="dropdown-inner">
          <LinkList>
            <a href={`${process.env.PUBLIC_URL}/auth-login`} onClick={handleSignout}>
              <Icon name="signout"></Icon>
              <span>Sign Out</span>
            </a>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default FrontPageUser;

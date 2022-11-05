import React from "react";
import classNames from "classnames";
import Toggle from "../sidebar/Toggle";
import Logo from "../logo/Logo";
import BetaLogo from "../logo/BetaLogo";
import User from "./dropdown/user/User";
import Notification from "./dropdown/notification/Notification";
import HeaderSearch from "../header-search/HeaderSearch";
import BetaHeaderSearch from "../header-search/HeaderSearch";
import ChatDropdown from "./dropdown/chat/Chat";
import {
  Block,
  BlockHead, BlockBetween,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  ReactDataTable, Icon, Row, Col, RSelect, BlockDes, Button
} from "../../slydo-components/Component";

const Header = ({ fixed, theme, className, setVisibility, ...props }) => {
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });
  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ml-n1">
            <Toggle
              className="nk-nav-toggle nk-quick-nav-icon d-xl-none ml-n1"
              icon="menu"
              click={props.sidebarToggle}
            />
          </div>
          <div className="nk-header-brand d-xl-none">
            <Logo />
          </div>
          {/* <div className="nk-header-search ml-3 ml-xl-0">
            <HeaderSearch />
          </div> */}
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              {/* <li className="chats-dropdown hide-mb-xs"  onClick={() => setVisibility(false)}>
                <ChatDropdown />
              </li>
              <li className="notification-dropdown mr-n1"  onClick={() => setVisibility(false)}>
                <Notification />
              </li> */}
              <BetaLogo/>
              <li className="user-dropdown"  onClick={() => setVisibility(false)}>
                {/* <BetaLogo /> */}
                <User />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

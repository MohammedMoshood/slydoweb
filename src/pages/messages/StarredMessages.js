import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Content from "../../layout/content/Content";
import UserProfileRegularPage from "./UserProfileRegular";
import StarredMessagesComp from "./StarredMessagesComp";
// import UserProfileSettingPage from "./UserProfileSetting";
// import UserProfileNotificationPage from "./UserProfileNotification";
// import UserProfileActivityPage from "./UserProfileActivity";
// import UserProfile from "./UserProfile";
import { Route, Switch, Link } from "react-router-dom";
import { Icon, UserAvatar } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
import { Card, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const StarredMessages = () => {

  const [sm, updateSm] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [profileName, setProfileName] = useState("Ayodeji Moshood");

  // function to change the design view under 990 px
  const viewChange = () => {
    if (window.innerWidth < 990) {
      setMobileView(true);
    } else {
      setMobileView(false);
      updateSm(false);
    }
  };

  useEffect(() => {
    viewChange();
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
    document.getElementsByClassName("nk-header")[0].addEventListener("click", function () {
      updateSm(false);
    });
    return () => {
      window.removeEventListener("resize", viewChange);
      window.removeEventListener("load", viewChange);
    };
  }, []);

  return (
    <React.Fragment>
      <Content>
        <Card className="card-bordered">
          <div className="card-aside-wrap">
            <div style={{width: '10%'}}
              className={`card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg ${
                sm ? "content-active" : ""
              }`}
            >
              <div className="card-inner-group">
                {/* <div className="card-inner">
                  <div className="user-card">
                    <UserAvatar text={findUpper(profileName)} theme="primary" />
                    <div className="user-info">
                      <span className="lead-text">{profileName}</span>
                      <span className="sub-text">info@slydo.co</span>
                    </div>
                    <div className="user-action">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="btn btn-icon btn-trigger mr-n2">
                          <Icon name="more-v"></Icon>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="camera-fill"></Icon>
                                <span>Change Photo</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="edit-fill"></Icon>
                                <span>Update Profile</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                </div> */}
                {/* <div className="card-inner">
                  <div className="user-account-info py-0">
                    <h6 className="overline-title-alt">Nio Wallet Account</h6>
                    <div className="user-balance">
                      12.395769 <small className="currency currency-btc">BTC</small>
                    </div>
                    <div className="user-balance-sub">
                      Locked{" "}
                      <span>
                        0.344939 <span className="currency currency-btc">BTC</span>
                      </span>
                    </div>
                  </div>
                </div> */}
                <div className="card-inner p-0">
                  <ul classNamex="link-list-menu" style={{padding: 25}}>
                    <li style={{marginBottom: 10}}>
                      <Link
                        to={`${process.env.PUBLIC_URL}/messages`}
                        className={
                          window.location.pathname === `${process.env.PUBLIC_URL}/messages` ? "active" : ""
                        }
                      >
                        <Button style={{width: '100%'}} className="btn-dim" outline color="">
                          <Icon name="mail-fill"/>
                          <span>All</span>
                        </Button>
                      </Link>
                    </li>
                    <li style={{marginBottom: 10}}>
                      <Link
                        to={`${process.env.PUBLIC_URL}/starred-messages`}
                        className={
                          window.location.pathname === `${process.env.PUBLIC_URL}/starred-messages`
                            ? "active"
                            : ""
                        }
                      >
                        <Button style={{width: '100%'}} className="btn-dim" outline color="primary">
                          <Icon name="star-fill"></Icon>
                          <span>Starred</span>
                        </Button>
                        
                      </Link>
                    </li>
                    <li style={{marginBottom: 10}}>
                      <Link
                        to={`${process.env.PUBLIC_URL}/archived-messages`}
                        className={
                          window.location.pathname === `${process.env.PUBLIC_URL}/archived-messages` ? "active" : ""
                        }
                      >
                        <Button style={{width: '100%'}} className="btn-dim" outline color="">
                          <Icon name="archive-fill"></Icon>
                          <span>Archived</span>
                        </Button>
                        
                      </Link>
                    </li>
                    <li style={{marginBottom: 10}}>
                      <Link
                        to={`${process.env.PUBLIC_URL}/sent-messages`}
                        className={
                          window.location.pathname === `${process.env.PUBLIC_URL}/sent-messages` ? "active" : ""
                        }
                      >
                         <Button style={{width: '100%'}} className="btn-dim" outline color="">
                          <Icon name="telegram"></Icon>
                          <span>Sent</span>
                        </Button>
                        
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`card-inner-lg card-inner`}
            >
              {/* <UserProfileRegularPage updateSm={updateSm} sm={sm} setProfileName={setProfileName} /> */}
              <StarredMessagesComp/>
            </div>
            {/* <UserProfile/> */}
            {/* <div className="card-inner card-inner-lg">
              {sm && mobileView && <div className="toggle-overlay" onClick={() => updateSm(!sm)}></div>}
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/user-profile-regular`}
                  render={() => <UserProfileRegularPage updateSm={updateSm} sm={sm} setProfileName={setProfileName} />}
                ></Route>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/user-profile-notification`}
                  render={() => <UserProfileNotificationPage updateSm={updateSm} sm={sm} />}
                ></Route>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/user-profile-activity`}
                  render={() => <UserProfileActivityPage updateSm={updateSm} sm={sm} />}
                ></Route>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/user-profile-setting`}
                  render={() => <UserProfileSettingPage updateSm={updateSm} sm={sm} />}
                ></Route>
              </Switch>
              
            </div> */}
          </div>
        </Card>
      </Content>
    </React.Fragment>
  );
};

export default StarredMessages;

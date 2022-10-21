import React, { useState, useEffect, useRef } from "react";
import Content from "../../layout/content/Content";
import UserProfileRegularPage from "./UserProfileRegular";
// import UserProfileSettingPage from "./UserProfileSetting";
// import UserProfileNotificationPage from "./UserProfileNotification";
// import UserProfileActivityPage from "./UserProfileActivity";
// import UserProfile from "./UserProfile";
import { Route, Switch, Link } from "react-router-dom";
import { Icon, UserAvatar, Button } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
import { Card, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle, Input } from "reactstrap";
import Dropzone from "react-dropzone";

const Profile = () => {
  const [sm, updateSm] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [profileName, setProfileName] = useState("Ayodeji Moshood");
  const inpt = useRef()

  const [files2, setFiles2] = useState([]);
    // handles ondrop function of dropzone
    const handleDropChange = (acceptedFiles, set) => {
      set(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    };
    // end upload wallpaper function

  const user = localStorage.getItem('accessToken');
  const slydouser = JSON.parse(user);

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
            <div
              className={`card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg ${
                sm ? "content-active" : ""
              }`}
            >
              <div className="card-inner-group">
                <div className="card-inner">
                  <div className="user-card">
                    {/* <UserAvatar text={findUpper(profileName)} theme="primary" /> */}
                    <UserAvatar theme="primary"  >
                      <img style={{height: '100%', width: '100%'}} src={slydouser.user.avatar}  alt="" />
                    </UserAvatar>
                    <div className="user-info">
                      {/* <span className="lead-text">{profileName}</span> */}
                      <span className="lead-text">{slydouser.user.full_name} • {slydouser.user.account_type}</span>
                      <span className="sub-text">{slydouser.user.phone_number}</span>
                    </div>
                    <div className="user-action">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="btn btn-icon btn-trigger mr-n2">
                          <Icon name="more-v"></Icon>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            {/* <Dropzone style={{backgroundOpacity: 0.5}} onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles2)} maxFiles={1}>
                            {({ getRootProps, getInputProps }) => ( */}
                              <section>
                                {/* <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                                  <input {...getInputProps()} />
                                  {files2.length === 0 && (
                                    <div {...getRootProps()} className="dropzone upload-zone dz-clickable"> */}
                                      <li className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                                        <DropdownItem
                                          tag="a"
                                          href="#dropdownitem"
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                          }}
                                        >
                                          <Icon name="camera-fill"></Icon>
                                          <span>Change Photo</span>
                                          {/* <Button className="btn-icon btn-round btn-dim btn-lg btn-outline-light"><em class="icon ni ni-camera"></em></Button> */}
                                        </DropdownItem>
                                      </li>
                                    {/* </div>
                                    )}
                                </div> */}
                              </section>

                            {/* </Dropzone> */}
                          </ul>
                          
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                </div>
                
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
                  <ul className="link-list-menu">
                    <li onClick={() => updateSm(false)}>
                      <Link
                        to={`${process.env.PUBLIC_URL}/profile`}
                        className={
                          window.location.pathname === `${process.env.PUBLIC_URL}/profile` ? "active" : ""
                        }
                      >
                        <Icon name="user-fill-c"></Icon>
                        <span>Personal Information</span>
                      </Link>
                    </li>
                    {/* <li onClick={() => updateSm(false)}>
                      <Link
                        to={`${process.env.PUBLIC_URL}/user-profile-notification`}
                        className={
                          window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-notification`
                            ? "active"
                            : ""
                        }
                      >
                        <Icon name="bell-fill"></Icon>
                        <span>Notification</span>
                      </Link>
                    </li>
                    <li onClick={() => updateSm(false)}>
                      <Link
                        to={`${process.env.PUBLIC_URL}/user-profile-activity`}
                        className={
                          window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-activity` ? "active" : ""
                        }
                      >
                        <Icon name="activity-round-fill"></Icon>
                        <span>Account Activity</span>
                      </Link>
                    </li>
                    <li onClick={() => updateSm(false)}>
                      <Link
                        to={`${process.env.PUBLIC_URL}/user-profile-setting`}
                        className={
                          window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-setting` ? "active" : ""
                        }
                      >
                        <Icon name="lock-alt-fill"></Icon>
                        <span>Security Setting</span>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`card-inner-lg card-inner`}
            >
              <UserProfileRegularPage updateSm={updateSm} sm={sm} setProfileName={setProfileName} />
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

export default Profile;

import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Content from "../../layout/content/Content";
import UserProfileRegularPage from "./UserProfileRegular";
import ArchivedMessagesComp from "./ArchivedMessagesComp";
import { Route, Switch, Link } from "react-router-dom";
import { Icon, UserAvatar } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
import { Card, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const ArchivedMessages = () => {

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
                        <Button style={{width: '100%'}} className="btn-dim" outline color="">
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
                        <Button style={{width: '100%'}} className="btn-dim" outline color="primary">
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
            <div className={`card-inner-lg card-inner`}>
              <ArchivedMessagesComp/>
            </div>
          </div>
        </Card>
      </Content>
    </React.Fragment>
  );
};

export default ArchivedMessages;

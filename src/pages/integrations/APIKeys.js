import React, { useState, useEffect } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
// import AudienceOverview from "../components/partials/analytics/audience-overview/AudienceOverview";
// import ActiveUser from "../components/partials/analytics/active-user/ActiveUser";
// import WebsitePerformance from "../components/partials/analytics/website-perfomance/WebsitePerfomance";
// import TrafficChannel from "../slydo-components/webhooks/Webhooks";
// import TrafficDougnut from "../components/partials/analytics/traffic-dougnut/TrafficDoughnut";
// import UserMap from "../components/partials/analytics/user-map/UserMap";
// import BrowserUser from "../components/partials/analytics/browser-users/BrowserUser";
// import PageViewer from "../components/partials/analytics/page-view/PageView";
// import SessionDevice from "../components/partials/analytics/session-devices/SessionDevice";
import { DropdownToggle, Dropdown, DropdownMenu, Card, UncontrolledDropdown, DropdownItem } from "reactstrap";
// import {
//   Block,
//   BlockHead,
//   BlockHeadContent,
//   BlockTitle,
//   Icon,
//   Button,
//   Row,
//   Col,
//   PreviewAltCard,
// } from "../components/Component";
import {
  Block,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  ReactDataTable,
  Icon,
  Button,
  Row,
  Col
} from "../../slydo-components/Component";
import { apiKeysTable } from "./TableData";
import { useSelector, useDispatch } from "react-redux";
import { getAPIKeys, createApiKey } from "../../redux/actions/integrations";
import { AddWebhookModal } from "./ModalData";
import axios from "axios";


const APIKeys = () => {
  const {apiKeys, loading} = useSelector(state => state.integrations)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAPIKeys())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const DropdownExample = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);  
  // const [isOpen, setIsOpen] = useState(false);
    
  //   const toggle = () => {setIsOpen(!isOpen)};

  const handleGenerate = (e) => {
    e.preventDefault();
    dispatch(createApiKey())
  // axios.patch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/developer-auth-token/`, { },  {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh
  //     }
  //   }).then((res) => {
  //       console.log(res)
  //   })
  }
    
  const [sm, updateSm] = useState(false);
  return (
    // <React.Fragment>
    //   <Head title="Analytics Dashboard" />
    //   <Content>
    //     <BlockHead size="sm">
    //       <div className="nk-block-between">
    //         <BlockHeadContent>
    //           <BlockTitle page tag="h3">
    //             API Keys
    //           </BlockTitle>
    //         </BlockHeadContent>
    //         <BlockHeadContent>
    //           <div className="toggle-wrap nk-block-tools-toggle">
    //             <Button
    //               className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
    //               onClick={() => updateSm(!sm)}
    //             >
    //               <Icon name="more-v"></Icon>
    //             </Button>
    //             <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
    //               <ul className="nk-block-tools g-3">
    //                 <li className="nk-block-tools-opt">
    //                   <Button color="primary">
    //                     <span>Generate New API Keys</span>
    //                   </Button>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </BlockHeadContent>
    //       </div>
    //     </BlockHead>

    //     <Block>
    //       <Row className="g-gs">
    //         {/* <Col lg="7" xxl="6">
    //           <PreviewAltCard className="h-100">
    //             <AudienceOverview />
    //           </PreviewAltCard>
    //         </Col> */}
    //         <Col lg="12" xxl="12">
    //           <Card className="h-100" style={{padding: 30, width: "100%"}}>
    //             {/* <TrafficChannel /> */}
    //             {/* <UncontrolledDropdown direction="right"> */}
    //             <Dropdown direction="right" style={{}} isOpen={dropdownOpen} toggle={toggle}>
    //               <DropdownToggle className="btn-action" color="light">
    //                 <span>Production API-Key: </span>
    //               </DropdownToggle>
    //               <DropdownMenu style={{float: "right"}}>
    //                 <ul className="link-list-opt">
    //                   <li>
    //                     <DropdownItem
    //                       tag="a"
    //                       href="#links"
    //                       onClick={(ev) => ev.preventDefault()}
    //                     >
    //                       <span>Test Secret Keys: yt4bry39y4vc7t47tyvcb4y927t48tvdrt39vrtcv9</span>
    //                     </DropdownItem>
    //                   </li>
    //                 </ul>
    //               </DropdownMenu>
    //             </Dropdown>
    //             {/* </UncontrolledDropdown> */}
    //           </Card>
    //         </Col>
    //       </Row>
    //     </Block>

    //     <BlockHead size="sm">
    //       <div className="nk-block-between">
    //         <BlockHeadContent>
    //           <BlockTitle page tag="h3">
    //             Webhooks
    //           </BlockTitle>
    //         </BlockHeadContent>
    //         <BlockHeadContent>
    //           <div className="toggle-wrap nk-block-tools-toggle">
    //             <Button
    //               className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
    //               onClick={() => updateSm(!sm)}
    //             >
    //               <Icon name="more-v"></Icon>
    //             </Button>
    //             <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
    //               <ul className="nk-block-tools g-3">
    //                 <li className="nk-block-tools-opt">
    //                   <Button color="primary">
    //                     <span>Add Webhooks</span>
    //                   </Button>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </BlockHeadContent>
    //       </div>
    //     </BlockHead>

    //     <Block>
    //       <Row className="g-gs">
    //         {/* <Col lg="7" xxl="6">
    //           <PreviewAltCard className="h-100">
    //             <AudienceOverview />
    //           </PreviewAltCard>
    //         </Col> */}
    //         <Col lg="12" xxl="12">
    //           <Card className="h-100">
    //             <TrafficChannel />
    //           </Card>
    //         </Col>
    //       </Row>
    //     </Block>
    //   </Content>
    // </React.Fragment>
    <React.Fragment>
      <Head title="Api Keys" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h4">API Keys</BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      <Button onClick={handleGenerate} color="primary">
                        <span>Generate New API Keys</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            {/* <Col lg="7" xxl="6">
              <PreviewAltCard className="h-100">
                <AudienceOverview />
              </PreviewAltCard>
            </Col> */}
            <Col lg="12" xxl="12">
              <Card className="h-100" style={{padding: 30, width: "100%"}}>
                {/* <TrafficChannel /> */}
                {/* <UncontrolledDropdown direction="right"> */}
                <Dropdown direction="right" style={{}} isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle className="btn-action" color="light">
                    <span>Production API-Key: </span>
                  </DropdownToggle>
                  <DropdownMenu style={{float: "right"}}>
                    <ul className="link-list-opt">
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#links"
                          onClick={(ev) => ev.preventDefault()}
                        >
                          <span>Test Secret Keys: yt4bry39y4vc7t47tyvcb4y927t48tvdrt39vrtcv9</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </Dropdown>
                {/* </UncontrolledDropdown> */}
              </Card>
            </Col>
          </Row>
        </Block>

        <BlockHead size="sm">
          <div className="nk-block-between">
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Webhooks
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      {/* <Button color="primary">
                        <span>Add Webhooks</span>
                      </Button> */}
                      <AddWebhookModal/>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </div>
        </BlockHead>

        <PreviewCard>
        { loading ? <p className="text-center">loading...</p> :
          <ReactDataTable
            data={apiKeys}
            columns={apiKeysTable}
            pagination
            className="nk-tb-list"
            selectableRows
          />
        }
        </PreviewCard>
        
      </Content>
    </React.Fragment>
  );
};

export default APIKeys;

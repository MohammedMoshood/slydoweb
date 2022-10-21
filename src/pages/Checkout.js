import React, { useState } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   CardHeader,
//   CardFooter,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   CardLink,
//   Button,
// } from "reactstrap";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
// import CheckoutScanner from "../components/partials/checkout-scanner/CheckoutScanner"
import CodeScan from "../images/icons/code-scan.svg";
// import SaleRevenue from "../components/partials/sales/sale-revenue/SaleRevenue";
// import ActiveSubscription from "../components/partials/sales/active-subscription/ActiveSubscription";
// import AvgSubscription from "../components/partials/sales/avg-subscription/AvgSubscription";
// import SalesOverview from "../components/partials/sales/sales-overview/SalesOverview";
import CheckoutTable from "../slydo-components/checkout/Checkout";
// import TransactionTable from "../components/partials/sales/transaction/Transaction";
// import RecentActivity from "../components/partials/sales/recent-activity/Activity";
// import NewsUsers from "../components/partials/sales/new-users/User";
// import Support from "../components/partials/sales/support-request/Support";
// import Notifications from "../components/partials/sales/notification/Notification";
import { Card, 
  // CardHeader, CardFooter, CardImg,
  // CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  // CardLink,
} from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockBetween,
  // PreviewAltCard,
  Icon,
  Button,
  Row,
  Col,
} from "../components/Component";

const Checkout = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Checkout" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Checkout
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v" />
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    {/* <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="btn btn-primary btn-dim btn-outline-light">
                          <Icon className="d-none d-sm-inline" name="calender-date" />
                          <span>
                            <span className="d-none d-md-inline">Scan</span>
                          </span>
                          <Icon className="dd-indc" name="chevron-right" />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#!"
                              >
                                <span>Last 30 days</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#dropdownitem"
                              >
                                <span>Last 6 months</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#dropdownitem"
                              >
                                <span>Last 3 weeks</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li> */}
                    <li className="nk-block-tools-optx">
                      <Button color="primary" className="btn btn-primary btn-dim btn-outline-light">
                        {/* <Icon name="reports" /> */}
                        <span>Scan</span>
                      </Button>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button color="primary">
                        <Icon name="reports" />
                        <span>Stop</span>
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
            <Col xxl="6">
              <Row className="g-gs">
                <Col lg="6" xxl="12" >
                  {/* <PreviewAltCard style={{backgroundColor: 'red'}}> */}
                    {/* <CheckoutScanner /> */}
                    <Card className="card-bordered" inverse color="primary">
                      {/* <CardHeader>Header</CardHeader> */}
                      <CardBody className="card-inner inverse text-center">
                        <img src={CodeScan} style={{width: 250, padding: 50}} alt="" />
                        {/* <CardTitle tag="h5">Primary card title</CardTitle>
                        <CardText>
                          Some quick example text to build on the card title and make
                          up the bulk of the card's content.
                        </CardText> */}
                      </CardBody>
                    </Card>
                  {/* </PreviewAltCard> */}
                </Col>
                {/* <Col lg="6" xxl="12">
                  <Row className="g-gs">
                    <Col sm="6" lg="12" xxl="6">
                      <PreviewAltCard>
                        <ActiveSubscription />
                      </PreviewAltCard>
                    </Col>
                    <Col sm="6" lg="12" xxl="6">
                      <PreviewAltCard>
                        <AvgSubscription />
                      </PreviewAltCard>
                    </Col>
                  </Row>
                </Col> */}
              </Row>
            </Col>
            <Col xxl="6">
              <Card className="card-bordered" inverse color="light">
                      {/* <CardHeader>Header</CardHeader> */}
                      <CardBody className="card-inner inverse text-center">
                        {/* <img src={CodeScan} style={{width: 300, padding: 50}} alt="" /> */}
                        <Row className="g-gs">
                          <Col lg="6" xxl="12" >
                            <Row className="g-gs">
                              <Col sm="6" lg="12" xxl="6">
                                <CardTitle className="text-dark text-left" tag="h5">Order Summary</CardTitle>
                              </Col>
                              <Col sm="6" lg="12" xxl="6">
                                <CardTitle className="text-dark text-right" tag="h5"><b>Total: &#8358; 34,500.00</b></CardTitle>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <div></div>
                        <Col lg="6" xxl="12" stylex={{bottom: 200}}>
                          <Row className="g-gs">
                            <Col sm="6" lg="12" xxl="6" stylex={{width: '100%'}}>
                              {/* <Button color="primary" className="btn btn-inverse-danger btn-dim btn-outline-light">
                                <span>Clear</span>
                              </Button> */}
                              <Button size="lg" style={{width: '100%'}} color="danger" className="btn btn-primary btn-dim btn-outline-light">
                                <span>Clear</span>
                              </Button>
                            </Col>
                            <Col sm="6" lg="12" xxl="6">
                              <Button size="lg" style={{width: '100%'}} color="primary" classNameX="btn btn-primary btn-dim btn-outline-light">
                                <span>Checkout</span>
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </CardBody>
                    </Card>
              {/* <PreviewAltCard className="h-100">
                <SalesOverview />
              </PreviewAltCard> */}
            </Col>
            <Col xxl="12">
              <Card className="card-full">
                <CheckoutTable />
              </Card>
            </Col>
            {/* <Col xxl="4" md="6">
              <Card className="card-full">
                <RecentActivity />
              </Card>
            </Col> */}
            {/* <Col xxl="4" md="6">
              <Card className="card-full">
                <NewsUsers />
              </Card>
            </Col>
            <Col lg="6" xxl="4">
              <Card className="h-100">
                <Support />
              </Card>
            </Col>
            <Col lg="6" xxl="4">
              <Card className="h-100">
                <Notifications />
              </Card>
            </Col> */}
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default Checkout;

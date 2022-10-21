import React, {useState, useEffect, useMemo} from "react";
// import axios from "axios";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  BlockHead,
  BlockBetween, Button, Icon,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { paymentRequestsTable, paymentrequestsData } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getPaymentRequest } from "../../redux/actions/payments"
import { PaymentRequestTable } from "./Table";

const PaymentRequests = () => {
  const [sm, updateSm] = useState(false);
  const {paymentRequest, loading} = useSelector(state => state.payments)
  const dispatch = useDispatch()

  // const data = useMemo(() =>{
  //   return paymentRequest 
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [paymentRequest?.length])

  // console.log(data, "this is from contact request")

  useEffect(() => {
    dispatch(getPaymentRequest())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   handleUserContactRequest()
  // }, []);

  // const handleUserContactRequest = async () => {
  //   return await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/contacts/`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("accessToken")).refresh
  //     }
  //   })
  //   .then((response) => {
  //     console.log(response.data.results.length, "--------repnse lrngth")
  //     const data = response.data.results.map(ob => ({
  //       name: ob.full_name,
  //       username: ob.username
  //     }))
  //     setContacts(data)
  //   })
  //   .catch(error => {
  //     console.log(error, '--------')
  //   })
  // }
  return (
    <React.Fragment>
      <Head title="Payment Requests" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Payment Requests
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
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          color="transparent"
                          className="dropdown-toggle dropdown-indicator btn btn-outline-primary btn-white"
                        >
                          <Icon name="exchange-v" />&nbsp;&nbsp;Filter
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={(ev) => ev.preventDefault()}>
                                <span>All</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={(ev) => ev.preventDefault()}>
                                <span>Received</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={(ev) => ev.preventDefault()}>
                                <span>Sent</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        
        <PreviewCard>
          <PaymentRequestTable/>
          {/* {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={paymentRequest}
              columns={paymentRequestsTable}
              pagination
              className="nk-tb-list"
              selectableRows
            />
          } */}
          </PreviewCard>
      </Content>
    </React.Fragment>
  );
};
export default PaymentRequests;

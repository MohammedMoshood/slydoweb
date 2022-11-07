import React, { useState, useMemo, useEffect } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import * as ReactBootStrap from "react-bootstrap";

import {
  Block,
  BlockHead,
  BlockBetween,
  BlockHeadContent,
  BlockTitle,
  Button,
  Icon,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import emptyicon from "../../images/icons/empty-folder.png";
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { paymentContractTable, payoutsData } from "./TableData";
import { useSelector, useDispatch } from "react-redux";
import { getPaymentContract } from "../../redux/actions/payments";

const PaymentContract = () => {
  const [sm, updateSm] = useState(false);
  const { paymentContract, loading } = useSelector((state) => state.payments);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState([]);

  // const data = useMemo(() =>{
  //   return payouts
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [payouts.length])

  useEffect(() => {
    dispatch(getPaymentContract());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <Head title="Payment Contract" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Payment Contract
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
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <ReactBootStrap.Table striped bordered hover sort>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Payment Duration</th>
              <th>Start Date</th>
              <th>End Date </th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr className="text-center">
                <td colSpan="7">
                  <div className="spinner-border text-primary m-5" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </td>
              </tr>
            ) : paymentContract.paymentContract !== undefined ? (
              paymentContract?.paymentContract?.map((item, index) => {
                // const dateFormat = new Date(item?.dateAndTime).toLocaleDateString();
                // const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();
                console.log(item);
                return (
                  <tr key={item?.id}>
                    {/* <td>{item?.from_name}</td> */}
                    <td></td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })
            ) : (
              <tr className="text-center">
                <td colSpan="12">
                  <img className="mt-5" src={emptyicon} style={{ width: "4%" }} alt="" />
                  <br />
                  <br />
                  <div className="mb-5 text-center">
                    <h6 style={{ fontWeight: 400, fontSize: 15 }}>
                      No Bank Accounts found. Click button below to refresh.
                      <br />
                      <br />
                      <Button
                        pill
                        className=" btn-outline-dark btn-xs btn-round"
                        onClick={() => dispatch(getPaymentContract(1, "", "", ""))}
                      >
                        Refresh
                      </Button>
                    </h6>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </ReactBootStrap.Table>
      </Content>
    </React.Fragment>
  );
};
export default PaymentContract;

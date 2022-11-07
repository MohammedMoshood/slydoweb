import React, {useState, useMemo, useEffect} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
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
import emptyicon from "../../images/icons/empty-folder.png"
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { paymentContractTable, payoutsData } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getPaymentContract } from "../../redux/actions/payments"

const PaymentContract = () => {
  const [sm, updateSm] = useState(false);
  const {paymentContract, loading} = useSelector(state => state.payments)
  const dispatch = useDispatch()
  // const [contacts, setContacts] = useState([]);

  // const data = useMemo(() =>{
  //   return payouts 
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [payouts.length])

  useEffect(() => {
    dispatch(getPaymentContract())
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
        
        <PreviewCard className="text-center">
        {  paymentContract.paymentContract !== undefined ? (
           loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={paymentContract}
              columns={paymentContractTable}
              pagination
              className="nk-tb-list"
              selectableRows
            ></ReactDataTable>
          ) :  (
            <div style={{display:"flex" , justifyContent:"center"}}>
            <tr className="text-center" >
              <td colSpan="12">
                <img className="mt-5" src={emptyicon} style={{width: '5%'}} alt="" />
                <br/>
                <br/>
                <div className="mb-5 text-center">
                  <h6 style={{fontWeight: 400, fontSize: 15}}>
                    No Payment Contracts found. Click button below to refresh.
                    <br/>
                    <br/>
                    <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getPaymentContract(1, "", "", ""))}>Refresh</Button>
                  </h6>
                </div>
              </td>
            </tr>
            </div>
          ) }
          </PreviewCard>
      </Content>
    </React.Fragment>
  );
};
export default PaymentContract;

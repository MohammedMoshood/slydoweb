import React, {useState, useEffect, useMemo} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockBetween,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
  Button, Icon
} from "../../slydo-components/Component";
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
// import { transactionTable, transactionData } from "./TableData";
// import { useSelector, useDispatch } from "react-redux";
// import { getTransactions } from "../../redux/actions/payments";
import  TransactionsTable  from "./Table";

const Transactions = () => {
  const [sm, updateSm] = useState(false);
  // const {payments, loading} = useSelector(state => state.payments)
  // const dispatch = useDispatch()
  // const [contacts, setContacts] = useState([]);

  // const data = useMemo(() =>{
  //   return transactions 
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [transactions?.length])

  // useEffect(() => {
  //   dispatch(getTransactions())
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <React.Fragment>
      <Head title="Transactions" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Transactions
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
          <TransactionsTable/>
            {/* <ReactDataTable
              // data={ordersData}
              // columns={ordersTable}
              data={transactionData}
              columns={transactionTable}
              pagination
              className="nk-tb-list"
              selectableRows
            /> */}
          {/* {data.length ? */}
          {/* {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              // data={ordersData}
              // columns={ordersTable}
              data={payments}
              columns={transactionTable}
              pagination
              className="nk-tb-list"
              selectableRows
            /> 
            // : null }
          } */}
          </PreviewCard>
      </Content>
    </React.Fragment>
  );
};

export default Transactions;
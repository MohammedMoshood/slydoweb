import React, {useState, useEffect} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  BlockHead,
  BlockBetween,
  BlockHeadContent,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
// import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { bankAccountsTable, bankaccountsData } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getBankAccounts } from "../../redux/actions/payments"
import { BankAccountTable } from "./Table";

const BankAccounts = () => {
  const [sm, updateSm] = useState(false);
  
  const {bankAccounts, loading} = useSelector(state => state.payments)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBankAccounts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Head title="Bank Accounts" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Bank Accounts
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
        
        <PreviewCard>
          <BankAccountTable/>
          {/* {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={bankAccounts}
              columns={bankAccountsTable}
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
export default BankAccounts;

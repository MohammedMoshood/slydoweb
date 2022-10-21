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
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { payoutsTable, payoutsData } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getPayouts } from "../../redux/actions/payments"
import { PayoutTable } from "./Table";

const Payouts = () => {
  const [sm, updateSm] = useState(false);
  const {payouts, loading} = useSelector(state => state.payments)
  const dispatch = useDispatch()
  // const [contacts, setContacts] = useState([]);

  // const data = useMemo(() =>{
  //   return payouts 
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [payouts.length])

  useEffect(() => {
    dispatch(getPayouts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <Head title="Payouts" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Payouts
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
          <PayoutTable/>
          {/* { loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={payouts}
              columns={payoutsTable}
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
export default Payouts;

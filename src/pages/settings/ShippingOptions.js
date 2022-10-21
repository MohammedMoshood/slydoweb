import React, {useState, useEffect} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockBetween,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
  Icon,
  Button, Row, Col
} from "../../slydo-components/Component";
import { Card, 
  // CardHeader, CardFooter, CardImg,
  // CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  // CardLink,
  UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle
} from "reactstrap";
import { shippingoptionsTable, shippingoptionsData } from "./TableData";
import { CreateShippingOptionModal } from "./ModalData";
import { useSelector, useDispatch } from "react-redux"
import { getShippingOptions } from "../../redux/actions/settings"
import { ShippingOptionsTable } from "./Table";


const ShippingOptions = () => {
  const [sm, updateSm] = useState(false);
  const dispatch = useDispatch()
  const {shippingOptions, loading} = useSelector(state => state.settings)

  useEffect(() => {
    // dispatch(getShippingOptions())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <Head title="Shipping Options" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Shipping Options
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
                    <li className="nk-block-tools-opt">
                      
                      <CreateShippingOptionModal/>
                    </li>
                  </ul>
                </div>
                
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        
        <PreviewCard>
          <ShippingOptionsTable/>
          {/* { loading ? <p className="text-center" stylexx={{backgroundColor: 'red'}}>loading...</p> :
            <ReactDataTable
              data={shippingOptions}
              columns={shippingoptionsTable}
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
export default ShippingOptions;

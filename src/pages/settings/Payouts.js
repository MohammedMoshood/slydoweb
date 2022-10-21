import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import { DataTableData, dataTableColumns, dataTableColumns2, userData } from "./TableData";

const Payouts = () => {
  return (
    <React.Fragment>
      <Head title="Basic Tables" />
      <Content page="component">
        {/* <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              DataTable Example
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                The tables in this section has used the{" "}
                <a href="https://react-data-table-component.netlify.app/" target="_blank" rel="noreferrer">
                  React-Data-Table-Component
                </a>{" "}
                package. Visit the{" "}
                <a href="https://react-data-table-component.netlify.app/" target="_blank" rel="noreferrer">
                  documentation
                </a>{" "}
                for further understanding. The plugin has been customized for the purpose of React slydo.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead> */}

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">Payouts</BlockTitle>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable
              data={userData}
              columns={dataTableColumns2}
              pagination
              className="nk-tb-list"
              selectableRows
            />
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Payouts;

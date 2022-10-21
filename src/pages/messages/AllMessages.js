import React, {useEffect} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import { AllMessagesTableColumns, userData } from "./TableData";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages } from "../../redux/actions/messages";
import AllMessagesTable from "./Table"

const MessagesDataTable = () => {
  const {allMessages, loading} = useSelector(state => state.messages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllMessages())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Head title="All Messages" />
      {/* <Content page="component"> */}
        

        {/* <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable Default</BlockTitle>
              <p>
                Just import <code>ReactDataTable</code> from <code>components</code>, it is built in for react slydo.
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination />
          </PreviewCard>
        </Block> */}

        {/* <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable with Export</BlockTitle>
              <p>
                Pass in the <code>actions</code> props to add export option to the table.
              </p>
            </BlockHeadContent>
          </BlockHead>

          <PreviewCard>
            <ReactDataTable data={DataTableData} columns={dataTableColumns} expandableRows pagination actions />
          </PreviewCard>
        </Block> */}

        {/* <Block size="lg"> */}
          {/* <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable with custom markup</BlockTitle>
            </BlockHeadContent>
          </BlockHead> */}

          <PreviewCard>
            <AllMessagesTable/>
          {/* {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={allMessages}
              columns={AllMessagesTableColumns}
              pagination
              className="nk-tb-list"
              selectableRows
            /> 
          } */}
          </PreviewCard>
        {/* </Block>
      </Content> */}
    </React.Fragment>
  );
};
export default MessagesDataTable;

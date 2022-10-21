import React, {useEffect} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import { StarredMessagesTableColumns } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getStarredMessages } from "../../redux/actions/messages"
import { StarredTable } from "./Table";

const StarredMessagesComp = () => {
  // const {starredMessages, loading} = useSelector(state => state.messages)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getStarredMessages())
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [starredMessages.length]);

  return (
    <React.Fragment>
      <Head title="Starred Messages" />
      <Content page="component">
        

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

        <Block size="lg">
          {/* <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h4">DataTable with custom markup</BlockTitle>
            </BlockHeadContent>
          </BlockHead> */}
          <StarredTable/>

          {/* <PreviewCard>
          {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={starredMessages}
              columns={StarredMessagesTableColumns}
              pagination
              className="nk-tb-list"
              selectableRows
            /> 
          }
          </PreviewCard> */}
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default StarredMessagesComp;

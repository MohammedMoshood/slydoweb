import React, {useEffect} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import { ArchivedMessagesTableColumns } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getArchivedMessages } from "../../redux/actions/messages"
import { ArchivedTable } from "./Table";

const ArchivedMessages = () => {
  const {archivedMessages, loading} = useSelector(state => state.messages)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getArchivedMessages())
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [archivedMessages.length]);

  return (
    <React.Fragment>
      <Head title="Archived Messages" />
      <Content page="component">
        <Block size="lg">
          <ArchivedTable/>
          {/* <PreviewCard>
          {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={archivedMessages}
              columns={ArchivedMessagesTableColumns}
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
export default ArchivedMessages;
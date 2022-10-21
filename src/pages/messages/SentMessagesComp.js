import React, {useEffect} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import { SentMessagesTableColumns } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getSentMessages } from "../../redux/actions/messages"
import { SentmessagesTable } from "./Table";

const SentMessages = () => {
  const {sentMessages, loading} = useSelector(state => state.messages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSentMessages())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentMessages.length]);

  return (
    <React.Fragment>
      <Head title="Sent Messages" />
      <Content page="component">
        <Block size="lg">
          <SentmessagesTable/>
          {/* <PreviewCard>
          {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={sentMessages}
              columns={SentMessagesTableColumns}
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
export default SentMessages;
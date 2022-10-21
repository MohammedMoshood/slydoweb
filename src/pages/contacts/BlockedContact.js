import React, {useEffect, useMemo} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import { blockedcontactTable, blockedcontactData } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getBlockedContacts } from "../../redux/actions/contacts"
import{ BlockedContactsTable} from "./Table";

const BlockedContact = () => {
  const {contacts, loading} = useSelector(state => state.contacts)
  // const dispatch = useDispatch()
  // const [contacts, setContacts] = useState([]);

  // const data = useMemo(() =>{
  //   return contacts 
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [contacts.length])

  useEffect(() => {
    // dispatch(getBlockedContacts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts.length]);
  return (
    <React.Fragment>
      <Head title="Blocked Contacts" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Blocked Contacts
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        
        <PreviewCard>
          <BlockedContactsTable/>
        {/* {data.length ?
          {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              data={contacts}
              columns={blockedcontactTable}
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
export default BlockedContact;

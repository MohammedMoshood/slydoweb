import React, {useState, useEffect, useMemo} from "react";
// import axios from "axios";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  BlockHead,
  BlockHeadContent,
  BlockBetween,
  BlockTitle,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
// import { contactsTable, contactsData } from "./TableData";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/actions/contacts";
import ContactsTable from "./Table";

function Contacts() {
  const {contacts, loading} = useSelector(state => state.contacts)
  // const dispatch = useDispatch()

  // const onChangePage = (page) => {
  //   console.log(page, "the chmaghed paged")
  // }


  useEffect(() => {
    // dispatch(getContacts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts.length]);
  
  console.log(contacts, 'from redux data')
  // console.log('123data!!!!', typeof(contacts) )

  return (
    <React.Fragment>
      <Head title="Contacts" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Contacts
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        
        <PreviewCard>
          <ContactsTable/>
          {/* {loading ? <p className="text-center">loading...</p> :
          <ReactDataTable
            progressPending={true}
            keyField="id"
            data={contacts}
            columns={contactsTable}
            pagination
            className="nk-tb-list"
            selectableRows
            // paginationTotalRows={4}
            // paginationPerPage={4}
            // onChangePage={onChangePage}
            // progressComponent="loader"
          /> } */}
        </PreviewCard>
        {/* <p>{contacts.length}</p> */}
      </Content>
    </React.Fragment>
  );
};
export default Contacts;

import React, {useEffect, useMemo} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
} from "../../slydo-components/Component";
import { contactRequestTable, contactRequestData } from "./TableData";
import { useSelector, useDispatch } from "react-redux"
import { getContactRequests } from "../../redux/actions/contacts"

const ContactRequests = () => {
  const {contactRequest, loading} = useSelector(state => state.contacts)
  const dispatch = useDispatch()
  // const [contacts, setContacts] = useState([]);

  const data = useMemo(() =>{
    return contactRequest 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactRequest?.length])

  console.log(data, "this is from contact request")

  useEffect(() => {
    dispatch(getContactRequests())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <React.Fragment>
      <Head title="Contact Requests" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Contact Requests
              </BlockTitle>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        
        <PreviewCard>
          {loading ? <p className="text-center">loading...</p> :
            <ReactDataTable
              // data={contactRequestData}
              data={data}
              columns={contactRequestTable}
              pagination
              className="nk-tb-list"
              selectableRows
            /> 
            }
          </PreviewCard>
      </Content>
    </React.Fragment>
  );
};
export default ContactRequests;

import React, {useState, useEffect} from "react";
import axios from "axios";
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
import { contactsTable } from "./TableData";

function Contacts() {

  // const [data, setData] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [timeout, setTimeout] = useState([]);

  useEffect(() => {
    handleUserContactRequest()
  }, []);

  const handleUserContactRequest = async () => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/contacts/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("accessToken")).refresh
      }
    })
    .then((response) => {
      console.log(response.data.results, "--------repnse")
      setContacts(response?.data?.results)
    })
    .catch(error => {
      console.log(error, '--------')
    })
  }

  console.log(contacts, '123data!!!!')

  // const handleUserContactRequest = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/contacts/`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("accessToken")).refresh
  //       }
  //     })

  //     if(res.data.results) setData(res.data.results)

  //     // console.log(res.data.results, '!!!!')
  //   } catch (error) {
      
  //   }
  // }
  // const [contacts, setContacts] = useState([]);
  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/user/contacts/`).then((response) => {
  //     setContacts(response.data.results);
  //   });
  // }, []);
  // console.log(contacts)
  // const [sm, updateSm] = useState(false);

  // const contactsTable = [
  //   {
  //     name: "User",
  //     selector: (row) => row.full_name,
  //     compact: true,
  //     grow: 2,
  //     style: { paddingRight: "20px" },
  //     cell: (row) => (
  //       <div className="user-card mt-2 mb-2">
  //         {/* <UserAvatar theme={row.avatarBg} text={findUpper(row.full_name)} image={row.avatar}></UserAvatar> */}
  //         <div className="user-info">
  //           <span className="tb-lead">
  //             {row.full_name}{" "}
  //             <span
  //               className={`dot dot-${
  //                 row.status === "Active" ? "success" : row.status === "Pending" ? "warning" : "danger"
  //               } d-md-none ml-1`}
  //             ></span>
  //           </span>
  //           {/* <span>{row.email}</span> */}
  //         </div>
  //       </div>
  //     ),
  //     sortable: true,
  //   },
  //   {
  //     name: "Username",
  //     selector: (row) => row.username,
  //     minWidth: "140px",
  //     cell: (row) => (
  //       <span className="tb-amount">
  //         <span className="currency"> {row.username} </span>
  //       </span>
  //     ),
  //     sortable: true,
  //     hide: 480,
  //   },
  //   {
  //     name: "Action",
  //     selector: (row) => row.action,
  //     hide: "md",
  //     cell: (row) => (
  //       <>
  //       {/* <RemoveContactModal/>
  //       &nbsp;
  //       <BlockContactModal/> */}
  //       </>
  //     ),
  //   },
  // ];
  return (
    <React.Fragment>
      {/* <div>
        {contactArray.map((item, index) => (
          <div key={index}>
            <h2>{item.full_name}</h2>
          </div>
        ))}
      </div> */}
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
          <ReactDataTable
            keyField="conversation_id"
            data={contacts}
            columns={contactsTable}
            pagination
            className="nk-tb-list"
            selectableRows
            progressComponent="loader"
          />
        </PreviewCard>
      </Content>
    </React.Fragment>
  );
};
export default Contacts;

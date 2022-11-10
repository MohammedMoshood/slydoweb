import React, {useState, useEffect} from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
import * as ReactBootStrap from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getBlockedContacts } from "../../redux/actions/contacts";
import ReactPaginate from 'react-paginate';
// import { AddNoteToOrderModal, ViewOrderModal, UpdateOrderStatusModal, ViewProductModal, ViewServiceModal, UpdateProductModal, UpdateServiceModal, DeleteProductModal, DeleteServiceModal } from "./ModalData";
import { Badge } from "reactstrap";
// import Filter from "./Filter";
import { UserAvatar, Icon, Button } from "../../slydo-components/Component";
import { RemoveContactModal, BlockContactModal, RemoveShippingOptionModal, EditShippingOptionModal, RemoveTeamMemberModal, UnblockConnectionModal } from "./ModalData";
// import { findUpper } from "../../utils/Utils";
import emptyicon from "../../images/icons/empty-folder.png"


const ContactsTable = () => {
  const dispatch = useDispatch()
  const {contacts, loading} = useSelector(state => state.contacts)
  console.log(contacts, 'the contacts')
  const [pageOffset, setPageOffset] = useState(0);

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getContacts(event?.selected + 1))
  };

  useEffect(() => {
    dispatch(getContacts(1))

   }, [dispatch]);

  return (
    <div>
      {/* <Filter /> */}
      <ReactBootStrap.Table striped bordered hover sort>
        <thead>
          <tr>
            <th>User</th>
            {/* <th>Username</th> */}
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
          { loading ? (
              <tr className="text-center">
                <td colSpan="7">
                  <div className="spinner-border text-primary m-5" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </td>
              </tr>
            ): 
            contacts.contacts !== undefined ? (
              contacts?.contacts?.map((item) => {
                      
                return (
                  <>
                  {
                    item !== null ? (
                      <tr key={item?.from_name}>
                         {/* <td>{item?.from_name}</td> */}
                        <td>
                          <div className="user-card text-center">
                            <UserAvatar theme={item?.avatarBg} image={item?.image}></UserAvatar> &nbsp; &nbsp;
                            {/* <span>{item?.name}</span> */}
                            <div className="user-info">
                              <span className="lead-text">{item?.name}</span>
                              <span className="sub-text">@{item?.username}</span>
                            </div>
                           </div>
                         </td>
                         {/* <td>
                           <div className="user-card text-center">
                             <UserAvatar theme={item?.avatarBg} image={item?.to_image}></UserAvatar> &nbsp; &nbsp;
                             <span>{item?.username}</span>
                           </div>
                         </td> */}
                         <td>
                           <RemoveContactModal user={item} /> &nbsp; <BlockContactModal user={item} />
                         </td>
                         {/* <td>{item?.paid === true ? "Paid" : "Not paid"}</td> */}
                         
                       </tr>
                    ) : (
                      <tr>
                        <td colSpan="7">
                          <h6>No contact found, click the reload button</h6>
                          <Icon name="reload" className="text-primary" onClick={() => dispatch(getOrders(1, "", "", ""))} />
                        </td>
                      </tr>
                    )
                  }
                  </>
                )
              }
            )
          ) : (
            <tr className="text-center">
              <td colSpan="12">
                <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
                <br/>
                <br/>
                <div className="mb-5 text-center">
                  <h6 style={{fontWeight: 400, fontSize: 15}}>
                    No contact found. Click button below to refresh.
                    <br/>
                    <br/>
                    <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getOrders(1, "", "", ""))}>Refresh</Button>
                  </h6>
                </div>
              </td>
            </tr>
          )
        }
      </tbody>
      </ReactBootStrap.Table>
      <br/>
      {contacts.contacts !== undefined &&
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={Math.round(contacts?.count/10)}
        // pageCount={Math.round(orders?.count/orders?.orders?.length)}
        pageRange={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName={"pages pagination"}
        activeClassName="active"
        forcePage={pageOffset}
      />}
    </div>
  
  );
};

export default ContactsTable;

export const BlockedContactsTable = () => {
  const dispatch = useDispatch()
  const {blockedcontacts, loading} = useSelector(state => state.contacts)
  console.log(blockedcontacts, 'the blocked contacts')
  const [pageOffset, setPageOffset] = useState(0);

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getBlockedContacts(event?.selected + 1))
  };

  useEffect(() => {
    dispatch(getBlockedContacts(1))
   }, [dispatch]);

  return (
    <div>
      {/* <Filter /> */}
      <ReactBootStrap.Table striped bordered hover sort>
        <thead>
          <tr>
            <th>User</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* <tbody>
         
          { loading ? (
              <tr className="text-center">
                <td colSpan="7">
                  <div className="spinner-border text-primary m-5" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </td>
              </tr>
            ): 
            blockedcontacts.blockcontact !== undefined ? (
              blockedcontacts?.blockcontact?.map((item) => {
                return (
                  <>
                  {
                    item !== null ? (
                      <tr key={item?.user}>             
                        <td>
                          <div className="user-card text-center">
                            <span>{item?.name}</span>
                          </div>
                        </td>
                        <td>
                          <div className="user-card text-center">
                            <span>{item?.username}</span>
                          </div>
                        </td>
                        <td>
                          <UnblockConnectionModal user={item}/>
                        </td>                    
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan="7">
                          <h6>No blocked contact found, click the reload button</h6>
                          <Icon name="reload" className="text-primary" onClick={() => dispatch(getOrders(1, "", "", ""))} />
                        </td>
                      </tr>
                    )
                  }
                  </>
                )
              }
              )
            ) : (
              <tr className="text-center">
              <td colSpan="12">
                <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
                <br/>
                <br/>
                <div className="mb-5 text-center">
                  <h6 style={{fontWeight: 400, fontSize: 15}}>
                    No blocked contact found. Click button below to refresh.
                    <br/>
                    <br/>
                    <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getOrders(1, "", "", ""))}>Refresh</Button>
                  </h6>
                </div>
              </td>
            </tr>
            )
          }
        </tbody> */}
        <tbody>
         
         { loading ? (
             <tr className="text-center">
               <td colSpan="7">
                 <div className="spinner-border text-primary m-5" role="status">
                   <span className="sr-only">Loading...</span>
                 </div>
               </td>
             </tr>
           ): 
           blockedcontacts.blockcontact !== undefined ? (
            blockedcontacts?.blockcontact?.map((item) => {
              return (
                <>
                {
                  item !== null ? (
                    <tr key={item?.user}>             
                      <td>
                        <div className="user-card text-center">
                          <span>{item?.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="user-card text-center">
                          <span>{item?.username}</span>
                        </div>
                      </td>
                      <td>
                        <UnblockConnectionModal user={item}/>
                      </td>                    
                    </tr>
                  ) : (
                    <tr>
                      <td colSpan="7">
                        <h6>No Blocked Contact found, click the reload button</h6>
                        <Icon name="reload" className="text-primary" onClick={() => dispatch(getBlockedContacts(1, "", "", ""))} />
                      </td>
                    </tr>
                  )
                }
                </>
              )
            }
            )
          ) : (
            <tr className="text-center">
            <td colSpan="12">
              <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
              <br/>
              <br/>
              <div className="mb-5 text-center">
                <h6 style={{fontWeight: 400, fontSize: 15}}>
                  No Blocked Contact found. Click button below to refresh.
                  <br/>
                  <br/>
                  <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getBlockedContacts(1, "", "", ""))}>Refresh</Button>
                </h6>
              </div>
            </td>
          </tr>
          )
        }
      </tbody>
      </ReactBootStrap.Table>
      <br/>
     { blockedcontacts.blockcontact !== undefined && 
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={Math.round(blockedcontacts?.blockedcontact?.count/10)}
        // pageCount={Math.round(orders?.count/orders?.orders?.length)}
        pageRange={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName={"pages pagination"}
        activeClassName="active"
        forcePage={pageOffset}
      />}
    </div>
  
  );
};
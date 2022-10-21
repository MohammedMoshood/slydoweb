import React, {useState, useEffect} from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
import * as ReactBootStrap from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages, archiveMessage, starMessage, unArchiveMessage, unStarMessage, getArchivedMessages, getStarredMessages, getSentMessages } from "../../redux/actions/messages";
import ReactPaginate from 'react-paginate';
// import { AddNoteToOrderModal, ViewOrderModal, UpdateOrderStatusModal, ViewProductModal, ViewServiceModal, UpdateProductModal, UpdateServiceModal, DeleteProductModal, DeleteServiceModal } from "./ModalData";
import { Badge } from "reactstrap";
// import Filter from "./Filter";
import { UserAvatar, Icon, Button } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";

const AllMessagesTable = () => {
  const dispatch = useDispatch()
  const {allMessages, loading} = useSelector(state => state.messages)
  console.log(allMessages, 'All Messages')
  // console.log(allMessages?.allMessages?.length, 'All Messages')
  // console.log(allMessages?.allMessages?.length, 'all messages count count')
  // console.log(allMessages?.count, 'all messages count')
  const [pageOffset, setPageOffset] = useState(0);
  const [archiveState, setArchiveState] = useState(true);  
  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getAllMessages(event?.selected + 1, "", "", ""))
  };
  
  useEffect(() => {
    dispatch(getAllMessages(1))
   }, [dispatch]);

  return (
    <div>
      {/* <Filter /> */}
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Actions </th>
            <th>Sender</th>
            <th>Recepient</th>
            <th>Title</th>
            <th>Date</th>
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
            allMessages?.map((item) => {
                      
              // const dateFormat = new Date(item?.timeSent).toLocaleDateString();
              // const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();            

              return (
                (
                  <tr key={item.id}>
                    <td>{
                      item.is_archived_by_recipient === false  ? (
                        <Icon name="archive"   style={{color: "blue", fontSize: "1.5rem"}}  onClick={()=>(dispatch(archiveMessage(item.id)))} /> ) : (
                        <Icon name="archive"  style={{color: "purple", fontSize: "1.5rem"}} size="35" onClick={()=>(dispatch(unArchiveMessage(item.id)))} />
                        )
                    }
                      {
                       item.is_starred_by_recipient === false ? (
                        <Icon name="star"  style={{color: "blue", fontSize: "1.5rem"}}  onClick={()=>(dispatch(starMessage(item.id)))} /> ) : (
                        <Icon name="star"  style={{color: "purple", fontSize: "1.5rem"}} size="35" onClick={()=>(dispatch(unStarMessage(item.id)))} />
                       )
                      }
                    </td>
                    <td>
                      <div className="user-card text-center">
                        <UserAvatar theme={item?.sender} image={item?.sender_avatar}></UserAvatar> &nbsp; &nbsp;
                        <span>{item?.sender}</span>
                      </div>
                    </td>
                    <td>
                    <div className="user-card text-center">
                        <UserAvatar theme={item?.recipient} image={item?.recipient_avatar}></UserAvatar> &nbsp; &nbsp;
                        <span>{item?.recipient}</span>
                      </div>
                    </td>
                    <td>{item?.subtitle}</td>
                    <td><span className="text-secondary" style={{fontWeight: 500}}>{item?.timeSent} </span></td>
                    {/* <td>
                      {
                        (item?.amount/100).toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        })
                      }
                    </td> */}
                    
                    {/* <td>
                      <Badge 
                        pill 
                        className={`tb-status btn-dim ml-1 btn-${
                          item?.status === "New Order" ? "info" :  item?.status === "Pending" ? "danger" : item?.status === "Processing" ? "warning" : item.status === "Awaiting Payment" ? "primary" : item.status === "Canceled" ? "danger" : "Complete" ? "success" : "Pending" ? "danger" : "danger"
                        }`}
                      >
                        {item?.status}
                      </Badge>
                    </td>
                    <td>{item?.paid === true ? "Paid" : "Not paid"}</td> */}
                    {/* <td>
                      <AddNoteToOrderModal data={item} /> &nbsp; <ViewOrderModal data={item} /> &nbsp; <UpdateOrderStatusModal data={item} />
                    </td> */}
                  </tr>
                )
              )
            })
          }
        </tbody>
      </ReactBootStrap.Table>
      <br/>
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
        pageCount={Math.round(allMessages?.count/10)}
        // pageCount={Math.round(orders?.count/orders?.orders?.length)}
        pageRange={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName={"pages pagination"}
        activeClassName="active"
        forcePage={pageOffset}
      />
    </div>
  
  );
};

export default AllMessagesTable;


export const ArchivedTable = () => {
  const {archivedMessages, loading} = useSelector(state => state.messages)
  console.log(archivedMessages, 'the archived messages')
 
  const dispatch = useDispatch()

  const [pageOffset, setPageOffset] = useState(0);
  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getArchivedMessages(event?.selected + 1, "", "", ""))
  }
    
    useEffect(() => {
      dispatch(getArchivedMessages())
    }, [dispatch])

  return (
    <div>
      {/* <Filter /> */}
      <ReactBootStrap.Table striped bordered hover>
        <thead>
  
            {/* <th>#</th> */}
            <th>Archive </th>
            <th>Sender</th>
            <th>Title</th>
            <th>Date</th>
        
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
            archivedMessages?.map((item) => {
                      
           
              return (
                (
                  <tr key={item.id}>
                    <td>{
                      item.archived=== false  ? (
                        <Icon name="archive"   style={{color: "blue", fontSize: "1.5rem"}}  onClick={()=>(dispatch(archiveMessage(item.id)))} /> ) : (
                        <Icon name="archive"  style={{color: "purple", fontSize: "1.5rem"}} size="35" onClick={()=>(dispatch(unArchiveMessage(item.id)))} />
                        )
                    }
                    </td>
                    <td>
                      <div className="user-card text-center">
                        <UserAvatar theme={item?.sender} image={item?.image}></UserAvatar> &nbsp; &nbsp;
                        <span>{item?.sender}</span>
                      </div>
                    </td>
                   
                    <td>{item?.subtitle}</td>
                    <td><span className="text-secondary" style={{fontWeight: 500}}>{item?.timeSent} </span></td>
                
                  </tr>
                )
              )
            })
          }
        </tbody>
      </ReactBootStrap.Table>
      <br/>
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
        pageCount={Math.round(archivedMessages?.count/10)}
        // pageCount={Math.round(orders?.count/orders?.orders?.length)}
        pageRange={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName={"pages pagination"}
        activeClassName="active"
        forcePage={pageOffset}
      />
    </div>
  )
}


export const StarredTable  = () => {
  const {starredMessages, loading} = useSelector(state => state.messages)
  
  const dispatch = useDispatch()
  const [pageOffset, setPageOffset] = useState(0);
  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getAllMessages(event?.selected + 1, "", "", ""))
  }
    
    useEffect(() => {
      dispatch(getStarredMessages())
      
    }, [dispatch])
   
  return (
    <div>
      {/* <Filter /> */}
      <ReactBootStrap.Table striped bordered hover>
        <thead>
  
            {/* <th>#</th> */}
            <th>Star </th>
            <th>Sender</th>
            <th>Title</th>
            <th>Date</th>
        
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
            starredMessages?.map((item) => {
                      
                 // const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();            

              return (
                (
                  <tr key={item.id}>
                    <td>
                      {
                       item.is_starred_by_recipient === false ? (
                        <Icon name="star"  style={{color: "blue", fontSize: "1.5rem"}}  onClick={()=>(dispatch(starMessage(item.id)))} /> ) : (
                        <Icon name="star"  style={{color: "purple", fontSize: "1.5rem"}} size="35" onClick={()=>(dispatch(unStarMessage(item.id)))} />
                       )
                        }
                    </td>
                    <td>
                      <div className="user-card text-center">
                        <UserAvatar theme={item?.sender} image={item?.sender_avatar}></UserAvatar> &nbsp; &nbsp;
                        <span>{item?.sender}</span>
                      </div>
                    </td>
                    <td>{item?.subtitle}</td>
                    <td><span className="text-secondary" style={{fontWeight: 500}}>{item?.timeSent} </span></td>
                    </tr>
              )
              )
            })
          }
        </tbody>
      </ReactBootStrap.Table>
      <br/>
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
        pageCount={Math.round(starredMessages?.count/10)}
        // pageCount={Math.round(orders?.count/orders?.orders?.length)}
        pageRange={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName={"pages pagination"}
        activeClassName="active"
        forcePage={pageOffset}
      />
    </div>
  )
}


export const SentmessagesTable = () => {
  const [pageOffset, setPageOffset] = useState(0);
  const {sentMessages, loading} = useSelector(state => state.messages)
  const dispatch = useDispatch();
 
  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getAllMessages(event?.selected + 1, "", "", ""))
  }
    
    useEffect(() => {
      dispatch(getSentMessages())
    }, [dispatch])

  return (
    <div>
      {/* <Filter /> */}
      <ReactBootStrap.Table striped bordered hover>
        <thead>
  
            {/* <th>#</th> */}
            <th>Star </th>
            <th>Recipient</th>
            <th>Title</th>
            <th>Date</th>
        
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
            sentMessages?.map((item) => {
                      
              // const dateFormat = new Date(item?.timeSent).toLocaleDateString();
              // const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();            

              return (
                (
                  <tr key={item.id}>
                    <td>{
                      item.is_archived_by_recipient === false  ? (
                        <Icon name="archive"   style={{color: "blue", fontSize: "1.5rem"}}  onClick={()=>(dispatch(archiveMessage(item.id)))} /> ) : (
                        <Icon name="archive"  style={{color: "purple", fontSize: "1.5rem"}} size="35" onClick={()=>(dispatch(unArchiveMessage(item.id)))} />
                        )
                    }
                      {
                       item.is_starred_by_recipient === false ? (
                        <Icon name="star"  style={{color: "blue", fontSize: "1.5rem"}}  onClick={()=>(dispatch(starMessage(item.id)))} /> ) : (
                        <Icon name="star"  style={{color: "purple", fontSize: "1.5rem"}} size="35" onClick={()=>(dispatch(unStarMessage(item.id)))} />
                       )
                        }
                    </td>
                    <td>
                      <div className="user-card text-center">
                        <UserAvatar theme={item?.sender} image={item?.image}></UserAvatar> &nbsp; &nbsp;
                        <span>{item?.sender}</span> 
                      </div>
                    </td>
                    <td>{item?.subtitle}</td>
                    <td><span className="text-secondary" style={{fontWeight: 500}}>{item?.timeSent} </span></td>
                    </tr>
              )
              )
            })
          }
            </tbody>
      </ReactBootStrap.Table>
      <br/>
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
        pageCount={Math.round(sentMessages?.count/10)}
        // pageCount={Math.round(orders?.count/orders?.orders?.length)}
        pageRange={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName={"pages pagination"}
        activeClassName="active"
        forcePage={pageOffset}
      />
    </div>
  )
}
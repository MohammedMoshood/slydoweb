import React, {useState, useEffect} from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
import * as ReactBootStrap from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
// <<<<<<< HEAD
// import { getTeamMembers, getProducts, getServices, getServiceCategories } from "../../redux/actions/settings";
// =======
import { getTeamMembers, getShippingOptions } from "../../redux/actions/settings"
import { ViewTeamMemberModal, ViewShippingOptionModal, EditTeamMemberModal, RemoveTeamMemberModal, EditShippingOptionModal, RemoveShippingOptionModal } from "./ModalData";
import ReactPaginate from 'react-paginate';
import { Badge } from "reactstrap";
import { UserAvatar, Icon, Button } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
import emptyicon from "../../images/icons/empty-folder.png"

export const TeamMembersTable = () => {
  const dispatch = useDispatch()
  const {teamMembers, loading} = useSelector(state => state.settings)
  console.log(teamMembers, 'the teamMembers')
 
  const [pageOffset, setPageOffset] = useState(0);

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getTeamMembers(event?.selected + 1))
  };

  useEffect(() => {
    dispatch(getTeamMembers(1))
   
   }, [dispatch]);

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover sort>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
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
            teamMembers.length !== 0 ? (
            teamMembers?.teammembers?.map((item) => {
                      
              // const dateFormat = new Date(item?.dateAndTime).toLocaleDateString();
              // const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();            

              return (
                (

                  <tr key={item?.id}>
                    
                    <td>
                      <div className="user-card text-center">
                        <UserAvatar theme={item?.avatarBg} image={item?.image}></UserAvatar> &nbsp; &nbsp;
                        <span>{item?.name}</span>
                      </div>
                    </td>
                    <td>
                      <Badge 
                        pill 
                        className={`tb-status btn-dim ml-1 btn-${
                          item?.role === "Administrator" ? "primary" :  item?.role === "Support Specialist" ? "dark" : item.role === "Completed" ? "dark" : "Pending" ? "success" : "Pending" ? "danger" : "danger"
                        }`}
                      >
                        {item?.role}
                      </Badge>
                    </td>
                    <td>
                      <Badge 
                        pill 
                        className={`tb-status btn-dim ml-1 btn-${
                          item?.status === "Active" ? "success" :  item?.status === "Inactive" ? "warning" : item.status === "Completed" ? "dark" : "Pending" ? "success" : "Pending" ? "danger" : "danger"
                        }`}
                      >
                        {item?.status}
                      </Badge>
                    </td>
                    <td>
                      <ViewTeamMemberModal data={item} /> &nbsp; <EditTeamMemberModal data={item} /> &nbsp; <RemoveTeamMemberModal data={item} />
                    </td>
                  </tr>
                )
              )
            })
         ) : (
          <tr className="text-center">
            <td colSpan="12">
              <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
              <br/>
              <br/>
              <div className="mb-5 text-center">
                <h6 style={{fontWeight: 400, fontSize: 15}}>
                  No Team Members found. Click button below to refresh.
                  <br/>
                  <br/>
                  <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getTeamMembers(1, "", "", ""))}>Refresh</Button>
                </h6>
              </div>
            </td>
          </tr>
        ) }
        </tbody>
      </ReactBootStrap.Table>
      <br/>
   {   teamMembers.length !== 0 &&
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
        pageCount={Math.round(teamMembers?.count/10)}
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

// export default TeamMembersTable;

export const ShippingOptionsTable = () => {
  const {shippingOptions, loading} = useSelector(state => state.settings)
  console.log(shippingOptions, 'the shippingOptions')
  const [pageOffset, setPageOffset] = useState(0);
  const dispatch = useDispatch()

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getShippingOptions(event?.selected + 1))
  }
  useEffect(() => {
    dispatch(getShippingOptions(1))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
    return(
      <div>
        <ReactBootStrap.Table striped bordered hover sort>
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Location Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              loading ? (
                <tr className="text-center">
                <td colSpan="7">
                  <div className="spinner-border text-primary m-5" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </td>
              </tr>    
              ): shippingOptions.length !== 0 ? (
                shippingOptions?.shippingoptions?.map((item) => {
                  // const dateFormat = new Date(item?.dateAndTime).toLocaleDateString();
                  // const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();

                  return (
                    <tr key={item.id}>
                      <td style={{width: '50%'}}>
                        <div className="user-card text-center">
                          {/* <UserAvatar theme={item?.avatarBg} image={item?.image}></UserAvatar> &nbsp; &nbsp; */}
                          <span style={{textAlign: "left"}}>{item?.name}</span>
                        </div>
                      </td>
                      <td>
                        {
                        (item?.amount/100).toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        })
                      }
                      </td>
                      {/* <td style={{width: '20%'}}>{item.short_description.toString().slice(0,30)}...</td> */}
                      {/* <td>{item.category}</td> */}
                      {/* <td>
                        <Badge 
                        pill 
                        className={`tb-status btn-dim ml-1 btn-${
                          item?.condition === "New" ? "success" : item?.condition === "Like New" ? "info" : item?.condition === "Poor" ? "danger" : item?.condition === "Fair" ? "warning" : item.condition === "Good" ? "primary" : item.condition === "Poor" ? "danger" : "New" ? "success" : "Poor" ? "danger" : "danger"
                        }`}
                      >
                        {item?.condition}
                      </Badge>
                      </td> */}
                      {/* <td>{dateFormat} <span className="text-secondary" style={{fontWeight: 500}}>• {timeFormat}</span></td> */}
                      <td stylex={{width: "20%"}}>
                        <ViewShippingOptionModal data={item}/> &nbsp; <EditShippingOptionModal data={item}/>&nbsp;<RemoveShippingOptionModal data={item}/>
                      </td>
                    </tr>
 
                  )
                })
              )  : (
                <tr className="text-center">
                  <td colSpan="12">
                    <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
                    <br/>
                    <br/>
                    <div className="mb-5 text-center">
                      <h6 style={{fontWeight: 400, fontSize: 15}}>
                        No Shipping options found. Click button below to refresh.
                        <br/>
                        <br/>
                        <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getShippingOptions(1, "", "", ""))}>Refresh</Button>
                      </h6>
                    </div>
                  </td>
                </tr>
              )
            }
          </tbody>
        </ReactBootStrap.Table>
        <br/>
    {    shippingOptions.length !== 0 &&
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
        pageCount={Math.round(shippingOptions?.count/10)}
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
    )
};

// export const ServiceTable = () => {
//   const {services, loading} = useSelector(state => state.slydocommerce)
//   console.log(services, 'the services')
//   const [pageOffset, setPageOffset] = useState(0);
//   const dispatch = useDispatch()

//   const handlePageClick = (event) => {
//     console.log(event?.selected + 1, 'the event of pagination clicking')
//     setPageOffset(event?.selected)
//     dispatch(getServices(event?.selected + 1))
//   }
//   useEffect(() => {
//     dispatch(getServices(1))
//   } , [dispatch]);
//     return(
//       <div>
//         <ReactBootStrap.Table striped bordered hover sort>
//           <thead>
//             <tr>
//               {/* <th></th> */}
//               <th>Service Name</th>
//               <th>Service Type</th>
//               <th>Service Description</th>
//               <th>Price</th>
//               <th>Service Provider</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//           {
//             loading ? (
//               <tr className="text-center">
//                 <td colSpan="7">
//                   <div className="spinner-border text-primary m-5" role="status">
//                     <span className="sr-only">Loading...</span>
//                   </div>
//                 </td>
//               </tr>
//             ): (
//               services?.services?.map((item) => {
//                 return (
//                   <tr key={item.id}>
//                     <td>
//                       <div className="user-card text-center">
//                         <UserAvatar theme={item?.avatarBg} image={item?.image}></UserAvatar> &nbsp; &nbsp;
//                         <span style={{textAlign: "left"}}>{item?.serviceName}</span>
//                       </div>
//                     </td>
//                     <td stylex={{width: '20%'}}>
//                       <Badge pill className="btn-dim btn-info">{item.serviceType}</Badge>
//                     </td>
//                     <td style={{width: '20%'}}>{item.description.toString().slice(0,30)}...</td>
//                     <td>
//                       {
//                         (item?.amount/100).toLocaleString("en-NG", {
//                           style: "currency",
//                           currency: "NGN",
//                         })
//                       }
//                     </td>
//                     <td stylex={{width: '20%'}}>{item.serviceProvider}</td>
//                     <td>
//                       <ViewServiceModal data={item} /> <UpdateServiceModal data={item} /> <DeleteServiceModal data={item} />
//                     </td>
//                   </tr>
//                 )
//               })
//             )
//           }
//           </tbody>
//         </ReactBootStrap.Table>
//         <br />
//         <ReactPaginate
//         previousLabel="Previous"
//         nextLabel="Next"
//         pageClassName="page-item"
//         pageLinkClassName="page-link"
//         previousClassName="page-item"
//         previousLinkClassName="page-link"
//         nextClassName="page-item"
//         nextLinkClassName="page-link"
//         breakLabel="..."
//         breakClassName="page-item"
//         breakLinkClassName="page-link"
//         pageCount={Math.round(services?.count/services?.services?.length)}
//         pageRange={2}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//         containerClassName="pagination"
//         subContainerClassName={"pages pagination"}
//         activeClassName="active"
//         forcePage={pageOffset}
//       />
//         </div>
// )                
// }
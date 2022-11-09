import React, {useState, useEffect} from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
import * as ReactBootStrap from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { getOrders, getProducts, getServices, getServiceCategories } from "../../redux/actions/slydocommerce";
import ReactPaginate from 'react-paginate';
import { AddNoteToOrderModal, ViewOrderModal, UpdateOrderStatusModal, ViewProductModal, ViewServiceModal, UpdateProductModal, UpdateServiceModal, DeleteProductModal, DeleteServiceModal } from "./ModalData";
import { Badge } from "reactstrap";
import Filter from "./Filter";
import { UserAvatar, Icon, Button } from "../../slydo-components/Component";
import { findUpper } from "../../utils/Utils";
import emptyicon from "../../images/icons/empty-folder.png";

const OrdersTable = () => {
  const dispatch = useDispatch()
  const {orders, loading} = useSelector(state => state.slydocommerce)
  // console.log(orders?.orders?.length, 'the orders')
  // console.log(orders.orders.length, 'the products')
  console.log(orders.count, 'the count')
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCountProps, setPageCountProps] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [statusProps, setStatusProps] = useState("");

 

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getOrders(event?.selected + 1, statusProps, searchText, pageCountProps))
  };

  useEffect(() => {
    dispatch(getOrders(1, "", "", ""))
   
  }, [dispatch]);

  const [order, setOrder] = useState("ASC");
  // const sorting = (col) => {
  //   if (order === "ASC") {
  //     const sorted = [...data].sort((a,b)=>
  //     a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1);
  //     setdata(sorted);
  //     setOrder("DSC");
  //   };
  //   if (order === "DSC") {
  //     const sorted = [...data].sort((a,b)=>
  //     a[col].tolowercase() < b[col].toLowerCase() ? 1: -1);
  //     setdata(sorted);
  //     setOrder("ASC");
  //   };
  // }

  return (
    <div>
      <Filter 
        handlePageCountProps = {setPageCountProps}
        handleStatusProps   = {setStatusProps}
        handleSearchProps={setSearchText}
      />
      <ReactBootStrap.Table striped bordered hover sort>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Order Number</th>
            <th>Customer</th>
            <th>Date &amp; Time</th>
            <th>Price</th>
            <th>Status</th>
            <th>Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
          { loading ? (
              <tr className="text-center">
                <td colSpan="7">
                  <div className="spinner-grow text-primary m-5" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </td>
              </tr>
            ): 
              orders.orders !== undefined ? (
                orders?.orders?.map((item) => {
                      
                  const dateFormat = new Date(item?.dateAndTime).toLocaleDateString();
                  const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();            
    
                  return (
                    <>
                    {
                      item !== null ? (
                          <tr key={item.orderNumber}>
                            <td>{item?.orderNumber}</td>
                            <td>
                              <div className="user-card text-center">
                                <UserAvatar theme={item?.avatarBg} image={item?.image}></UserAvatar> &nbsp; &nbsp;
                                <span>{item?.customer}</span>
                              </div>
                            </td>
                            <td>{dateFormat} <span className="text-secondary" style={{fontWeight: 500}}>• {timeFormat}</span></td>
                            <td>
                              {
                                (item?.amount/100).toLocaleString("en-NG", {
                                  style: "currency",
                                  currency: "NGN",
                                })
                              }
                            </td>
                            <td>
                              <Badge 
                                pill 
                                className={`tb-status btn-dim ml-1 btn-${
                                  item?.status === "New Order" ? "info" :  item?.status === "Pending" ? "danger" : item?.status === "Processing" ? "warning" : item.status === "Awaiting Payment" ? "primary" : item.status === "Canceled" ? "danger" : "Complete" ? "success" : "Pending" ? "danger" : "danger"
                                }`}
                              >
                                {item?.status}
                              </Badge>
                            </td>
                            <td>{item?.paid === true ? "Paid" : "Not paid"}</td>
                            <td>
                              <AddNoteToOrderModal data={item} /> &nbsp; <ViewOrderModal data={item} /> &nbsp; <UpdateOrderStatusModal data={item} />
                            </td>
                          </tr>
                        
                      ):(
                        <tr>
                          <td colSpan="7">
                            <h6>No Orders found, click the reload button</h6>
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
                      No Orders found. Click button below to refresh.
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
      {/* <br/>
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
        pageCount={Math.ceil(orders?.count/10)}
        // pageCount={Math.round(orders?.count/orders?.orders?.length)}
        pageRange={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName={"pages pagination"}
        activeClassName="active"
        forcePage={pageOffset}
      /> */}
    </div>
  
  );
};

export default OrdersTable;

export const ProductsTable = () => {
  const {products, loading} = useSelector(state => state.slydocommerce)
  console.log(products, 'the products')
  const {user} = useSelector(state => state.user)
  const [pageOffset, setPageOffset] = useState(0);
  const dispatch = useDispatch()

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getProducts(user.username, event?.selected + 1))
  }
  useEffect(() => {
    dispatch(getProducts(user.username, 1))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
    return(
      <div>
        <Filter />
        <ReactBootStrap.Table striped bordered hover sort>
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Product Name</th>
              <th>Price</th>
              <th>Short Description</th>
              <th>Production Category</th>
              <th>Condition</th>
              <th>Date &amp; Time</th>
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
              ): (
                products.products !== undefined ? (
                products?.products?.map((item) => {
                  const dateFormat = new Date(item?.dateAndTime).toLocaleDateString();
                  const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();

                  return (
                    <tr key={item.id}>
                      <td style={{width: '22%'}}>
                        <div className="user-card text-center">
                          <UserAvatar theme={item?.avatarBg} image={item?.image}></UserAvatar> &nbsp; &nbsp;
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
                      <td style={{width: '20%'}}>{item.short_description.toString().slice(0,30)}...</td>
                      <td>{item.category}</td>
                      <td>
                        <Badge 
                        pill 
                        className={`tb-status btn-dim ml-1 btn-${
                          item?.condition === "New" ? "success" : item?.condition === "Like New" ? "info" : item?.condition === "Poor" ? "danger" : item?.condition === "Fair" ? "warning" : item.condition === "Good" ? "primary" : item.condition === "Poor" ? "danger" : "New" ? "success" : "Poor" ? "danger" : "danger"
                        }`}
                      >
                        {item?.condition}
                      </Badge>
                      </td>
                      <td>{dateFormat} <span className="text-secondary" style={{fontWeight: 500}}>• {timeFormat}</span></td>
                      <td>
                        <ViewProductModal data={item} /> <UpdateProductModal data={item} /> <DeleteProductModal data={item} />
                      </td>
                    </tr>
 
                  )
                })) :(
                  <tr className="text-center">
                  <td colSpan="12">
                    <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
                    <br/>
                    <br/>
                    <div className="mb-5 text-center">
                      <h6 style={{fontWeight: 400, fontSize: 15}}>
                        No Products found, Click button below to refresh.
                        <br/>
                        <br/>
                        <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getProducts(1, "", "", ""))}>Refresh</Button>
                      </h6>
                    </div>
                  </td>
                </tr>
                )
              )
            }
          </tbody>
        </ReactBootStrap.Table>
        <br/>
      {  products.products !== undefined &&
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
        pageCount={Math.round(products?.count/products?.products?.length)}
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

export const ServiceTable = () => {
  const {services, loading} = useSelector(state => state.slydocommerce)
  console.log(services, 'the services')
  const [pageOffset, setPageOffset] = useState(0);
  const dispatch = useDispatch()

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    dispatch(getServices(event?.selected + 1))
  }
  useEffect(() => {
    dispatch(getServices(1))
  } , [dispatch]);
    return(
      <div>
        <ReactBootStrap.Table striped bordered hover sort>
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Service Name</th>
              <th>Service Type</th>
              <th>Service Description</th>
              <th>Price</th>
              <th>Service Provider</th>
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
            ):
              services.services !== undefined ? (
                services?.services?.map((item) => {
                  return (
                    <>
                    {
                      item !== null ? (
                        <tr key={item.id}>
                          <td>
                            <div className="user-card text-center">
                              <UserAvatar theme={item?.avatarBg} image={item?.image}></UserAvatar> &nbsp; &nbsp;
                              <span style={{textAlign: "left"}}>{item?.serviceName}</span>
                            </div>
                          </td>
                          <td stylex={{width: '20%'}}>
                            <Badge pill className="btn-dim btn-info">{item.serviceType}</Badge>
                          </td>
                          <td style={{width: '20%'}}>{item.description.toString().slice(0,30)}...</td>
                          <td>
                            {
                              (item?.amount/100).toLocaleString("en-NG", {
                                style: "currency",
                                currency: "NGN",
                              })
                            }
                          </td>
                          <td stylex={{width: '20%'}}>{item.serviceProvider}</td>
                          <td>
                            <ViewServiceModal data={item} /> <UpdateServiceModal data={item} /> <DeleteServiceModal data={item} />
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td colSpan="7">
                            <h6>No Services found, click the reload button</h6>
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
                      No Services found. Click button below to refresh.
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
      {/* <br />
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
        pageCount={Math.round(services?.count/services?.services?.length)}
        pageRange={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName={"pages pagination"}
        activeClassName="active"
        forcePage={pageOffset}
      /> */}
    </div>
)                
}
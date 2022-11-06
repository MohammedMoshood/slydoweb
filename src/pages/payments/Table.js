import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';
import * as ReactBootStrap from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  getPaymentRequest,
  getTransactions,
  getPayouts,
  getInvoice,
  getBankAccounts,
} from "../../redux/actions/payments";
import ReactPaginate from "react-paginate";
// import { AddNoteToOrderModal, ViewOrderModal, UpdateOrderStatusModal, ViewProductModal, ViewServiceModal, UpdateProductModal, UpdateServiceModal, DeleteProductModal, DeleteServiceModal } from "./ModalData";
import { Badge } from "reactstrap";
// import Filter from "./Filter";
import { UserAvatar, Icon, Button } from "../../slydo-components/Component";
import { PaymentRequestsModal } from "./ModalData";
// import { findUpper } from "../../utils/Utils";
import emptyicon from "../../images/icons/empty-folder.png"

//Transaction Table
const TransactionsTable = () => {
  const dispatch = useDispatch();
  // const {orders, loading} = useSelector(state => state.slydocommerce)
  const { payments, loading } = useSelector((state) => state.payments);
  console.log(payments, "the payments");
  // console.log(payments?.payments?.length, 'the payments pay')
  // console.log(payments?.count, 'the payments count')
  // const {user} = useSelector(state => state.user)
  const [pageOffset, setPageOffset] = useState(0);

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, "the event of pagination clicking");
    setPageOffset(event?.selected);
    dispatch(getTransactions(event?.selected + 1));
  };

  useEffect(() => {
    dispatch(getTransactions(1));
  }, [dispatch]);

  return (
    <div>
      {/* <Filter /> */}
      <ReactBootStrap.Table striped bordered hover sort>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>From Customer</th>
            <th>To Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date &amp; Time</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr className="text-center">
              <td colSpan="7">
                <div className="spinner-border text-primary m-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </td>
            </tr>
          ) : payments.payments !== undefined ? (
            payments?.payments?.map((item) => {
              const dateFormat = new Date(item?.dateAndTime).toLocaleDateString();
              const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();

              return (
                <>
                  <tr key={item?.from_name}>
                    {/* <td>{item?.from_name}</td> */}

                    <td>
                      <div className="user-card text-center">
                        <UserAvatar theme={item?.avatarBg} image={item?.from_image}></UserAvatar> &nbsp; &nbsp;
                        <span>{item?.from_name}</span>
                      </div>
                    </td>
                    <td>
                      <div className="user-card text-center">
                        <UserAvatar theme={item?.avatarBg} image={item?.to_image}></UserAvatar> &nbsp; &nbsp;
                        <span>{item?.to_name}</span>
                      </div>
                    </td>

                    <td>
                      {(item?.amount / 100).toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </td>
                    <td>
                      <Badge
                        pill
                        className={`tb-status btn-dim ml-1 btn-${
                          item?.status === "New Order"
                            ? "info"
                            : item?.status === "Pending"
                            ? "danger"
                            : item?.status === "Processing"
                            ? "warning"
                            : item.status === "Awaiting Payment"
                            ? "primary"
                            : item.status === "Canceled"
                            ? "danger"
                            : "Complete"
                            ? "success"
                            : "Pending"
                            ? "danger"
                            : "danger"
                        }`}
                      >
                        {item?.status}
                      </Badge>
                    </td>
                    <td>
                      {dateFormat}{" "}
                      <span className="text-secondary" style={{ fontWeight: 500 }}>
                        • {timeFormat}
                      </span>
                    </td>
                    <td>{item?.category}</td>
                    <td>{item?.description}</td>
                    {/* <td>{item?.paid === true ? "Paid" : "Not paid"}</td> */}
                  </tr>
                 
                </>
              );
            })
          ) : ( <tr className="text-center">
          <td colSpan="12">
            <img className="mt-5" src={emptyicon} style={{ width: "4%" }} alt="" />
            <br />
            <br />
            <div className="mb-5 text-center">
              <h6 style={{ fontWeight: 400, fontSize: 15 }}>
                No Transactions found. Click button below to refresh.
                <br />
                <br />
                <Button
                  pill
                  className=" btn-outline-dark btn-xs btn-round"
                  onClick={() => dispatch(getTransactions(1, "", "", ""))}
                >
                  Refresh
                </Button>
              </h6>
            </div>
          </td>
        </tr>)
        }
        </tbody>
      </ReactBootStrap.Table>
      <br />
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
        pageCount={Math.round(payments?.count / 10)}
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

export default TransactionsTable;

//Payment Requests
export const PaymentRequestTable = () => {
  const { paymentRequest, loading } = useSelector((state) => state.payments);
  const { user } = useSelector((state) => state.user);
  const [pageOffset, setPageOffset] = useState(0);
  const dispatch = useDispatch();
  console.log(paymentRequest, "the payment request");
  const handlePageClick = (event) => {
    console.log(event?.selected + 1, "the event of pagination clicking");
    setPageOffset(event?.selected);
    dispatch(getPaymentRequest(user.username, event?.selected + 1));
  };
  useEffect(() => {
    dispatch(getPaymentRequest());
  }, [dispatch]);
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover sort>
        <thead>
          <tr>
            {/* <th></th> */}
            <th>From Customer</th>
            <th>To Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date &amp; Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="text-center">
              <td colSpan="7">
                <div className="spinner-border text-primary m-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </td>
            </tr>
          ) :  paymentRequest.paymentRequest !== undefined ? (
            paymentRequest?.paymentrequest?.map((item) => {
              const dateFormat = new Date(item?.dateAndTime).toLocaleDateString();
              const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();
              return (
                <tr key={item.id}>
                  <td>
                    <div className="user-card text-center">
                      <UserAvatar theme={item?.avatarBg} image={item?.from_image}></UserAvatar> &nbsp; &nbsp;
                      <span style={{ textAlign: "left" }}>{item?.from_name}</span>
                    </div>
                  </td>
                  <td style={{ width: "20%" }}>
                    <div className="user-card text-center">
                      <UserAvatar theme={item?.avatarBg} image={item?.to_image}></UserAvatar> &nbsp; &nbsp;
                      <span style={{ textAlign: "left" }}>{item?.to_name}</span>
                    </div>
                  </td>

                  <td>
                    {(item?.amount / 100).toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>
                  {/* <td style={{width: '20%'}}>{item?.description}</td>
                      <td>{item.category}</td> */}
                  <td>
                    <Badge
                      pill
                      className={`tb-status btn-dim ml-1 btn-${
                        item.inout === "success" ? "success" : item.inout === "Pending" ? "warning" : "secondary"
                      }`}
                    >
                      {item?.inout}
                    </Badge>
                  </td>
                  {/* <td>
                        {item?.condition}
                      </td> */}
                  <td>
                    {dateFormat}{" "}
                    <span className="text-secondary" style={{ fontWeight: 500 }}>
                      • {timeFormat}
                    </span>
                  </td>
                  <td>
                    <PaymentRequestsModal />
                  </td>
                </tr>
              );
            })
          )  : (
            <tr className="text-center">
              <td colSpan="12">
                <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
                <br/>
                <br/>
                <div className="mb-5 text-center">
                  <h6 style={{fontWeight: 400, fontSize: 15}}>
                    No Payment Requests found. Click button below to refresh.
                    <br/>
                    <br/>
                    <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getPaymentRequest(1, "", "", ""))}>Refresh</Button>
                  </h6>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </ReactBootStrap.Table>
      <br />
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
        pageCount={Math.round(paymentRequest.count / 10)}
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

//Payout Table
export const PayoutTable = () => {
  const { payouts, loading } = useSelector((state) => state.payments);
  const [pageOffset, setPageOffset] = useState(0);
  const dispatch = useDispatch();
  console.log(payouts, "the payout");
  const handlePageClick = (event) => {
    console.log(event?.selected + 1, "the event of pagination clicking");
    setPageOffset(event?.selected);
    dispatch(getPayouts(event?.selected + 1));
  };
  useEffect(() => {
    dispatch(getPayouts(1));
  }, [dispatch]);
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover sort>
        <thead>
          <tr>
            {/* <th></th> */}
            <th>Customer Name</th>
            <th>Account Number</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="text-center">
              <td colSpan="7">
                <div className="spinner-border text-primary m-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </td>
            </tr>
          ) : payouts.payouts !== undefined ? (
            payouts?.payouts?.map((item, index) => {
              const dateFormat = new Date(item?.dateAndTime).toLocaleDateString();
              const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();
              return (
                <tr key={index}>
                  <td>{item?.customer_bank_account?.bank_account}</td>
                  <td>{item?.customer_bank_account?.account_number}</td>
                  <td style={{ width: "20%" }}>
                    {(item?.amount / 100).toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>
                  <td>
                    <Badge
                      pill
                      className={`tb-status btn-dim ml-1 btn-${
                        item?.status === "Paid"
                          ? "success"
                          : item?.status === "Pending"
                          ? "danger"
                          : item?.status === "Processing"
                          ? "warning"
                          : item.status === "Awaiting Payment"
                          ? "primary"
                          : item.status === "Canceled"
                          ? "danger"
                          : "Complete"
                          ? "success"
                          : "Pending"
                          ? "danger"
                          : "danger"
                      }`}
                    >
                      {item?.status}
                    </Badge>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="text-center">
              <td colSpan="12">
                <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
                <br/>
                <br/>
                <div className="mb-5 text-center">
                  <h6 style={{fontWeight: 400, fontSize: 15}}>
                    No Payouts found. Click button below to refresh.
                    <br/>
                    <br/>
                    <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getPayouts(1, "", "", ""))}>Refresh</Button>
                  </h6>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </ReactBootStrap.Table>
      <br />
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
        pageCount={Math.round(payouts.count / 10)}
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

//Invoice
export const InvoiceTable = () => {
  const { invoice, loading } = useSelector((state) => state.payments);
  const [pageOffset, setPageOffset] = useState(0);
  const dispatch = useDispatch();
  console.log(invoice, "the invoice");
  const handlePageClick = (event) => {
    console.log(event?.selected + 1, "the event of pagination clicking");
    setPageOffset(event?.selected);
    dispatch(getInvoice(event?.selected + 1));
  };
  useEffect(() => {
    dispatch(getInvoice(1));
  }, [dispatch]);
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover sort>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>From Customer</th>
            <th>To Customer</th>
            <th>Amount</th>
            <th>Items</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Invoice Date</th>
            {/* <th>Category</th> */}
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="text-center">
              <td colSpan="7">
                <div className="spinner-border text-primary m-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </td>
            </tr>
          ) : invoice.invoice !== undefined ? (
            invoice?.invoice?.map((item, index) => {
              const dueDateFormat = new Date(item?.dueDate).toLocaleDateString();
              const invoiceDateFormat = new Date(item?.invoiceDate).toLocaleTimeString();
              return (
                <tr key={item?.id}>
                  {/* <td>{item?.from_name}</td> */}

                  <td>
                    <div className="user-card text-center">
                      <UserAvatar theme={item?.avatarBg} image={item?.from_image}></UserAvatar> &nbsp; &nbsp;
                      <span>{item?.from_name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="user-card text-center">
                      <UserAvatar theme={item?.avatarBg} image={item?.to_image}></UserAvatar> &nbsp; &nbsp;
                      <span>{item?.to_name}</span>
                    </div>
                  </td>

                  <td>
                    {(item?.amount / 100).toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>
                  <td> {item?.items?.name} </td>
                  <td>
                    <Badge
                      pill
                      className={`tb-status btn-dim ml-1 btn-${
                        item?.status === "Paid"
                          ? "primary"
                          : item?.status === "Unpaid"
                          ? "danger"
                          : item?.status === "Processing"
                          ? "warning"
                          : item.status === "Awaiting Payment"
                          ? "primary"
                          : item.status === "Canceled"
                          ? "danger"
                          : "Complete"
                          ? "success"
                          : "Pending"
                          ? "danger"
                          : "danger"
                      }`}
                    >
                      {item?.status}
                    </Badge>
                  </td>
                  <td>
                    {dueDateFormat}{" "}
                    <span className="text-secondary" style={{ fontWeight: 500 }}>
                      • {dueDateFormat}
                    </span>
                  </td>
                  <td>
                    {invoiceDateFormat}{" "}
                    <span className="text-secondary" style={{ fontWeight: 500 }}>
                      • {invoiceDateFormat}
                    </span>
                  </td>
                  {/* <td>{item?.description}</td> */}
                  {/* <td>{item?.paid === true ? "Paid" : "Not paid"}</td> */}
                  <td>
                    {/* <AddNoteToOrderModal data={item} /> &nbsp; <ViewOrderModal data={item} /> &nbsp; <UpdateOrderStatusModal data={item} /> */}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="text-center">
              <td colSpan="12">
                <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
                <br/>
                <br/>
                <div className="mb-5 text-center">
                  <h6 style={{fontWeight: 400, fontSize: 15}}>
                    No Invoice found. Click button below to refresh.
                    <br/>
                    <br/>
                    <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getInvoice(1, "", "", ""))}>Refresh</Button>
                  </h6>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

// Bank Account
export const BankAccountTable = () => {
  const { bankAccounts, loading } = useSelector((state) => state.payments);
  const [pageOffset, setPageOffset] = useState(0);
  const dispatch = useDispatch();
  console.log(bankAccounts, "the bank account");
  const handlePageClick = (event) => {
    console.log(event?.selected + 1, "the event of pagination clicking");
    setPageOffset(event?.selected);
    dispatch(getBankAccounts(event?.selected + 1));
  };
  useEffect(() => {
    dispatch(getBankAccounts(1));
  }, [dispatch]);
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover sort>
        <thead>
          <tr>
            <th>Bank Name</th>
            <th>Account Name</th>
            <th>Account Number</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="text-center">
              <td colSpan="7">
                <div className="spinner-border text-primary m-5" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </td>
            </tr>
          ) : bankAccounts.bankAccounts !== undefined ? (
            bankAccounts?.bankAccounts?.map((item, index) => {
              // const dateFormat = new Date(item?.dateAndTime).toLocaleDateString();
              // const timeFormat = new Date(item?.dateAndTime).toLocaleTimeString();
              return (
                <tr key={item?.id}>
                  {/* <td>{item?.from_name}</td> */}
                  <td>
                    <div className="user-card text-center">
                      <UserAvatar theme={item?.avatarBg} image={item?.bank?.image}></UserAvatar> &nbsp; &nbsp;
                      <span>{item?.bank.name}</span>
                    </div>
                  </td>
                  <td> {item?.account_name} </td>
                  <td>{item?.account_number}</td>
                </tr>
              );
            })
          ) : (
            <tr className="text-center">
              <td colSpan="12">
                <img className="mt-5" src={emptyicon} style={{width: '4%'}} alt="" />
                <br/>
                <br/>
                <div className="mb-5 text-center">
                  <h6 style={{fontWeight: 400, fontSize: 15}}>
                    No Bank Accounts found. Click button below to refresh.
                    <br/>
                    <br/>
                    <Button pill className=" btn-outline-dark btn-xs btn-round" onClick={() => dispatch(getBankAccounts(1, "", "", ""))}>Refresh</Button>
                  </h6>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </ReactBootStrap.Table>
      <br />
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
        pageCount={Math.round(bankAccounts?.count / 10)}
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
